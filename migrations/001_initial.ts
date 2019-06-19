/* tslint:disable await-promise */
import Knex from 'knex'

import {schema, updateTimestamp} from '../src/utils/MigrationUtils'

export async function up(knex: Knex) {
  const getColumns = schema(knex)

  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')

  // timestamp updates
  await knex.raw(`
    CREATE OR REPLACE FUNCTION set_updated_at()
    RETURNS TRIGGER AS $$
    BEGIN
      NEW.updated_at = CURRENT_TIMESTAMP;
      RETURN NEW;
    END;
    $$ language 'plpgsql';
  `)

  // ignore the migration tables
  await knex.raw(`COMMENT ON TABLE knex_migrations is E'@omit';`)
  await knex.raw(`COMMENT ON TABLE knex_migrations_lock is E'@omit';`)

  // access roles
  await knex.raw(
    `ALTER DEFAULT PRIVILEGES REVOKE EXECUTE ON FUNCTIONS FROM public;`
  )
  await knex.raw('DROP ROLE IF EXISTS graft_user;')
  await knex.raw('CREATE ROLE graft_user;')
  await knex.raw(`GRANT USAGE ON SCHEMA public TO graft_user;`)
  await knex.raw(`GRANT graft_user TO graft_root;`)

  // user
  await knex.schema.createTable('user', table => {
    table.comment('User authentication information')

    const columns = getColumns(table)
    columns.primaryUuid()

    table.timestamps(true, true)

    // fields
    table
      .string('username')
      .unique()
      .notNullable()
      .comment(`The User''s login id - usually their email address.`)

    table
      .boolean('is_active')
      .comment(`If false, the User is suspended.`)
      .defaultTo(true)
  })

  await updateTimestamp(knex, 'user')

  await knex.raw(
    `GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE "user" TO graft_user;`
  )
  await knex.raw(`ALTER TABLE "user" ENABLE ROW LEVEL SECURITY;`)

  await knex.raw(`
    CREATE POLICY user_same_user_policy ON "user"
      USING (username = current_setting('jwt.claims.sub'))
      WITH CHECK (username = current_setting('jwt.claims.sub'));
  `)

  // address
  await knex.schema.createTable('address', table => {
    table.comment('Mailing addresses')

    const columns = getColumns(table)
    columns.primaryUuid()

    table.timestamps(true, true)

    // fields
    table.string('line1').comment('The first line of the Address.')

    table.string('line2').comment('The second line of the Address.')

    table.string('city').comment('The city.')

    table.string('state').comment('The state or province.')

    table.string('country').comment('The country.')

    table.string('postal_code').comment('The zip or other postal code.')

    table
      .specificType('location', 'POINT')
      .comment('The latitude and longitude of the Address.')
  })

  await updateTimestamp(knex, 'address')

  await knex.raw(
    `GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE "address" TO graft_user;`
  )

  // account
  await knex.schema.createTable('account', table => {
    table.comment('User profile information')

    const columns = getColumns(table)
    columns.primaryUuid()

    table.timestamps(true, true)

    // fields
    table
      .jsonb('attributes')
      .comment('Free-form Account attributes controlled by the front end.')

    // relationships
    columns
      .foreignUuid('user', {column: 'id', table: 'user'}, true)
      .comment('The User that created the Profile.')

    columns
      .foreignUuid('address', {column: 'id', table: 'address'})
      .comment(`The Account''s current Address.`)
  })

  await updateTimestamp(knex, 'account')

  await knex.raw(
    `GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE "account" TO graft_user;`
  )
  await knex.raw(`ALTER TABLE "account" ENABLE ROW LEVEL SECURITY;`)

  await knex.raw(`
    CREATE POLICY account_same_user_policy ON "account"
      USING (
        (
          SELECT true AS bool FROM (
            SELECT id FROM "user" u
            WHERE u.username = current_setting('jwt.claims.sub')
          ) AS user_using
        ) = true
      )
      WITH CHECK (
        "account".user IN (
          SELECT id FROM "user" u
          WHERE u.username = current_setting('jwt.claims.sub')
        )
      );
  `)
}

export function down(_knex: Knex) {
  throw new Error('Downward migrations are not supported. Restore from backup.')
}
