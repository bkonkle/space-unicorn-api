/* tslint:disable await-promise */
import Knex from 'knex'

export async function up(knex: Knex) {
  await knex.raw(`
    -- mutation getCurrentUser
    CREATE OR REPLACE FUNCTION get_current_user()
      RETURNS "user"
      AS $$
        INSERT INTO "user" (username) VALUES (current_setting('jwt.claims.sub'))
        ON CONFLICT (username) DO UPDATE SET username = current_setting('jwt.claims.sub')
        RETURNING *;
      $$
      LANGUAGE sql VOLATILE;

    COMMENT ON FUNCTION get_current_user IS E'Get or create a user based on the logged-in JWT claims.';
    GRANT EXECUTE ON FUNCTION get_current_user() TO graft_user;
  `)
}

export function down(_knex: Knex) {
  throw new Error('Downward migrations are not supported. Restore from backup.')
}
