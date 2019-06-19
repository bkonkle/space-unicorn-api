import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any
  /** A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any
  /** A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

/** User profile information */
export type Account = {
  __typename?: 'Account'
  id: Scalars['UUID']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  /** Free-form Account attributes controlled by the front end. */
  attributes?: Maybe<Scalars['JSON']>
  /** The User that created the Profile. */
  user: Scalars['UUID']
  /** The Account's current Address. */
  address?: Maybe<Scalars['UUID']>
  /** Reads a single `User` that is related to this `Account`. */
  userByUser?: Maybe<User>
  /** Reads a single `Address` that is related to this `Account`. */
  addressByAddress?: Maybe<Address>
}

/** A condition to be used against `Account` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AccountCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `attributes` field. */
  attributes?: Maybe<Scalars['JSON']>
  /** Checks for equality with the object’s `user` field. */
  user?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `address` field. */
  address?: Maybe<Scalars['UUID']>
}

/** An input for mutations affecting `Account` */
export type AccountInput = {
  id?: Maybe<Scalars['UUID']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Free-form Account attributes controlled by the front end. */
  attributes?: Maybe<Scalars['JSON']>
  /** The User that created the Profile. */
  user: Scalars['UUID']
  /** The Account's current Address. */
  address?: Maybe<Scalars['UUID']>
}

/** Represents an update to a `Account`. Fields that are set will be updated. */
export type AccountPatch = {
  id?: Maybe<Scalars['UUID']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Free-form Account attributes controlled by the front end. */
  attributes?: Maybe<Scalars['JSON']>
  /** The User that created the Profile. */
  user?: Maybe<Scalars['UUID']>
  /** The Account's current Address. */
  address?: Maybe<Scalars['UUID']>
}

/** A connection to a list of `Account` values. */
export type AccountsConnection = {
  __typename?: 'AccountsConnection'
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>
  /** A list of edges which contains the `Account` and cursor to aid in pagination. */
  edges: Array<AccountsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `Account` edge in the connection. */
export type AccountsEdge = {
  __typename?: 'AccountsEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>
}

/** Methods to use when ordering `Account`. */
export enum AccountsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  AttributesAsc = 'ATTRIBUTES_ASC',
  AttributesDesc = 'ATTRIBUTES_DESC',
  UserAsc = 'USER_ASC',
  UserDesc = 'USER_DESC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
}

/** Mailing addresses */
export type Address = {
  __typename?: 'Address'
  id: Scalars['UUID']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  /** The first line of the Address. */
  line1?: Maybe<Scalars['String']>
  /** The second line of the Address. */
  line2?: Maybe<Scalars['String']>
  /** The city. */
  city?: Maybe<Scalars['String']>
  /** The state or province. */
  state?: Maybe<Scalars['String']>
  /** The country. */
  country?: Maybe<Scalars['String']>
  /** The zip or other postal code. */
  postalCode?: Maybe<Scalars['String']>
  /** The latitude and longitude of the Address. */
  location?: Maybe<Point>
  /** Reads and enables pagination through a set of `Account`. */
  accountsByAddress: AccountsConnection
}

/** Mailing addresses */
export type AddressAccountsByAddressArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy: Array<AccountsOrderBy>
  condition?: Maybe<AccountCondition>
}

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `line1` field. */
  line1?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `line2` field. */
  line2?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `city` field. */
  city?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `state` field. */
  state?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `country` field. */
  country?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `postalCode` field. */
  postalCode?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `location` field. */
  location?: Maybe<PointInput>
}

/** A connection to a list of `Address` values. */
export type AddressesConnection = {
  __typename?: 'AddressesConnection'
  /** A list of `Address` objects. */
  nodes: Array<Maybe<Address>>
  /** A list of edges which contains the `Address` and cursor to aid in pagination. */
  edges: Array<AddressesEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `Address` edge in the connection. */
export type AddressesEdge = {
  __typename?: 'AddressesEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `Address` at the end of the edge. */
  node?: Maybe<Address>
}

/** Methods to use when ordering `Address`. */
export enum AddressesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  Line1Asc = 'LINE1_ASC',
  Line1Desc = 'LINE1_DESC',
  Line2Asc = 'LINE2_ASC',
  Line2Desc = 'LINE2_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  StateAsc = 'STATE_ASC',
  StateDesc = 'STATE_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  PostalCodeAsc = 'POSTAL_CODE_ASC',
  PostalCodeDesc = 'POSTAL_CODE_DESC',
  LocationAsc = 'LOCATION_ASC',
  LocationDesc = 'LOCATION_DESC',
}

/** An input for mutations affecting `Address` */
export type AddressInput = {
  id?: Maybe<Scalars['UUID']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  /** The first line of the Address. */
  line1?: Maybe<Scalars['String']>
  /** The second line of the Address. */
  line2?: Maybe<Scalars['String']>
  /** The city. */
  city?: Maybe<Scalars['String']>
  /** The state or province. */
  state?: Maybe<Scalars['String']>
  /** The country. */
  country?: Maybe<Scalars['String']>
  /** The zip or other postal code. */
  postalCode?: Maybe<Scalars['String']>
  /** The latitude and longitude of the Address. */
  location?: Maybe<PointInput>
}

/** Represents an update to a `Address`. Fields that are set will be updated. */
export type AddressPatch = {
  id?: Maybe<Scalars['UUID']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  /** The first line of the Address. */
  line1?: Maybe<Scalars['String']>
  /** The second line of the Address. */
  line2?: Maybe<Scalars['String']>
  /** The city. */
  city?: Maybe<Scalars['String']>
  /** The state or province. */
  state?: Maybe<Scalars['String']>
  /** The country. */
  country?: Maybe<Scalars['String']>
  /** The zip or other postal code. */
  postalCode?: Maybe<Scalars['String']>
  /** The latitude and longitude of the Address. */
  location?: Maybe<PointInput>
}

/** All input for the create `Account` mutation. */
export type CreateAccountInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `Account` to be created by this mutation. */
  account: AccountInput
}

/** The output of our create `Account` mutation. */
export type CreateAccountPayload = {
  __typename?: 'CreateAccountPayload'
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `Account` that was created by this mutation. */
  account?: Maybe<Account>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `User` that is related to this `Account`. */
  userByUser?: Maybe<User>
  /** Reads a single `Address` that is related to this `Account`. */
  addressByAddress?: Maybe<Address>
  /** An edge for our `Account`. May be used by Relay 1. */
  accountEdge?: Maybe<AccountsEdge>
}

/** The output of our create `Account` mutation. */
export type CreateAccountPayloadAccountEdgeArgs = {
  orderBy: Array<AccountsOrderBy>
}

/** All input for the create `Address` mutation. */
export type CreateAddressInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `Address` to be created by this mutation. */
  address: AddressInput
}

/** The output of our create `Address` mutation. */
export type CreateAddressPayload = {
  __typename?: 'CreateAddressPayload'
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `Address` that was created by this mutation. */
  address?: Maybe<Address>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>
}

/** The output of our create `Address` mutation. */
export type CreateAddressPayloadAddressEdgeArgs = {
  orderBy: Array<AddressesOrderBy>
}

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `User` to be created by this mutation. */
  user: UserInput
}

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload'
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>
}

/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy: Array<UsersOrderBy>
}

/** All input for the `deleteAccountById` mutation. */
export type DeleteAccountByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  id: Scalars['UUID']
}

/** The output of our delete `Account` mutation. */
export type DeleteAccountPayload = {
  __typename?: 'DeleteAccountPayload'
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `Account` that was deleted by this mutation. */
  account?: Maybe<Account>
  deletedAccountId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `User` that is related to this `Account`. */
  userByUser?: Maybe<User>
  /** Reads a single `Address` that is related to this `Account`. */
  addressByAddress?: Maybe<Address>
  /** An edge for our `Account`. May be used by Relay 1. */
  accountEdge?: Maybe<AccountsEdge>
}

/** The output of our delete `Account` mutation. */
export type DeleteAccountPayloadAccountEdgeArgs = {
  orderBy: Array<AccountsOrderBy>
}

/** All input for the `deleteAddressById` mutation. */
export type DeleteAddressByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  id: Scalars['UUID']
}

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayload = {
  __typename?: 'DeleteAddressPayload'
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `Address` that was deleted by this mutation. */
  address?: Maybe<Address>
  deletedAddressId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>
}

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayloadAddressEdgeArgs = {
  orderBy: Array<AddressesOrderBy>
}

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  id: Scalars['UUID']
}

/** All input for the `deleteUserByUsername` mutation. */
export type DeleteUserByUsernameInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The User's login id - usually their email address. */
  username: Scalars['String']
}

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload'
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>
  deletedUserId?: Maybe<Scalars['ID']>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>
}

/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy: Array<UsersOrderBy>
}

/** All input for the `getCurrentUser` mutation. */
export type GetCurrentUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
}

/** The output of our `getCurrentUser` mutation. */
export type GetCurrentUserPayload = {
  __typename?: 'GetCurrentUserPayload'
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  user?: Maybe<User>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>
}

/** The output of our `getCurrentUser` mutation. */
export type GetCurrentUserPayloadUserEdgeArgs = {
  orderBy: Array<UsersOrderBy>
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation'
  /** Creates a single `Account`. */
  createAccount?: Maybe<CreateAccountPayload>
  /** Creates a single `Address`. */
  createAddress?: Maybe<CreateAddressPayload>
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccountById?: Maybe<UpdateAccountPayload>
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddressById?: Maybe<UpdateAddressPayload>
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUsername?: Maybe<UpdateUserPayload>
  /** Deletes a single `Account` using a unique key. */
  deleteAccountById?: Maybe<DeleteAccountPayload>
  /** Deletes a single `Address` using a unique key. */
  deleteAddressById?: Maybe<DeleteAddressPayload>
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>
  /** Deletes a single `User` using a unique key. */
  deleteUserByUsername?: Maybe<DeleteUserPayload>
  /** Get or create a user based on the logged-in JWT claims. */
  getCurrentUser?: Maybe<GetCurrentUserPayload>
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountArgs = {
  input: CreateAccountInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountByIdArgs = {
  input: UpdateAccountByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressByIdArgs = {
  input: UpdateAddressByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUsernameArgs = {
  input: UpdateUserByUsernameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountByIdArgs = {
  input: DeleteAccountByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressByIdArgs = {
  input: DeleteAddressByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByUsernameArgs = {
  input: DeleteUserByUsernameInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationGetCurrentUserArgs = {
  input: GetCurrentUserInput
}

/** An object with a globally unique `ID`. */
export type Node = {
  __typename?: 'Node'
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>
}

export type Point = {
  __typename?: 'Point'
  x: Scalars['Float']
  y: Scalars['Float']
}

export type PointInput = {
  x: Scalars['Float']
  y: Scalars['Float']
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query'
  /** Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>
  /** Reads and enables pagination through a set of `Account`. */
  allAccounts?: Maybe<AccountsConnection>
  /** Reads and enables pagination through a set of `Address`. */
  allAddresses?: Maybe<AddressesConnection>
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>
  accountById?: Maybe<Account>
  addressById?: Maybe<Address>
  userById?: Maybe<User>
  userByUsername?: Maybe<User>
}

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAccountsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy: Array<AccountsOrderBy>
  condition?: Maybe<AccountCondition>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllAddressesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy: Array<AddressesOrderBy>
  condition?: Maybe<AddressCondition>
}

/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy: Array<UsersOrderBy>
  condition?: Maybe<UserCondition>
}

/** The root query type which gives access points into the data universe. */
export type QueryAccountByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryAddressByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['UUID']
}

/** The root query type which gives access points into the data universe. */
export type QueryUserByUsernameArgs = {
  username: Scalars['String']
}

/** All input for the `updateAccountById` mutation. */
export type UpdateAccountByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch
  id: Scalars['UUID']
}

/** The output of our update `Account` mutation. */
export type UpdateAccountPayload = {
  __typename?: 'UpdateAccountPayload'
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `Account` that was updated by this mutation. */
  account?: Maybe<Account>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `User` that is related to this `Account`. */
  userByUser?: Maybe<User>
  /** Reads a single `Address` that is related to this `Account`. */
  addressByAddress?: Maybe<Address>
  /** An edge for our `Account`. May be used by Relay 1. */
  accountEdge?: Maybe<AccountsEdge>
}

/** The output of our update `Account` mutation. */
export type UpdateAccountPayloadAccountEdgeArgs = {
  orderBy: Array<AccountsOrderBy>
}

/** All input for the `updateAddressById` mutation. */
export type UpdateAddressByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** An object where the defined keys will be set on the `Address` being updated. */
  addressPatch: AddressPatch
  id: Scalars['UUID']
}

/** The output of our update `Address` mutation. */
export type UpdateAddressPayload = {
  __typename?: 'UpdateAddressPayload'
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `Address` that was updated by this mutation. */
  address?: Maybe<Address>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>
}

/** The output of our update `Address` mutation. */
export type UpdateAddressPayloadAddressEdgeArgs = {
  orderBy: Array<AddressesOrderBy>
}

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch
  id: Scalars['UUID']
}

/** All input for the `updateUserByUsername` mutation. */
export type UpdateUserByUsernameInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch
  /** The User's login id - usually their email address. */
  username: Scalars['String']
}

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload'
  /** The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>
}

/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy: Array<UsersOrderBy>
}

/** User authentication information */
export type User = {
  __typename?: 'User'
  id: Scalars['UUID']
  createdAt: Scalars['Datetime']
  updatedAt: Scalars['Datetime']
  /** The User's login id - usually their email address. */
  username: Scalars['String']
  /** If false, the User is suspended. */
  isActive?: Maybe<Scalars['Boolean']>
  /** Reads and enables pagination through a set of `Account`. */
  accountsByUser: AccountsConnection
}

/** User authentication information */
export type UserAccountsByUserArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy: Array<AccountsOrderBy>
  condition?: Maybe<AccountCondition>
}

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: Maybe<Scalars['Datetime']>
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>
  /** Checks for equality with the object’s `isActive` field. */
  isActive?: Maybe<Scalars['Boolean']>
}

/** An input for mutations affecting `User` */
export type UserInput = {
  id?: Maybe<Scalars['UUID']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  /** The User's login id - usually their email address. */
  username: Scalars['String']
  /** If false, the User is suspended. */
  isActive?: Maybe<Scalars['Boolean']>
}

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  id?: Maybe<Scalars['UUID']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  /** The User's login id - usually their email address. */
  username?: Maybe<Scalars['String']>
  /** If false, the User is suspended. */
  isActive?: Maybe<Scalars['Boolean']>
}

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection'
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']
}

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge'
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>
  /** The `User` at the end of the edge. */
  node?: Maybe<User>
}

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  IsActiveAsc = 'IS_ACTIVE_ASC',
  IsActiveDesc = 'IS_ACTIVE_DESC',
}

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: {}
  Node: Node
  ID: Scalars['ID']
  Int: Scalars['Int']
  Cursor: Scalars['Cursor']
  AccountsOrderBy: AccountsOrderBy
  AccountCondition: AccountCondition
  UUID: Scalars['UUID']
  Datetime: Scalars['Datetime']
  JSON: Scalars['JSON']
  AccountsConnection: AccountsConnection
  Account: Account
  User: User
  String: Scalars['String']
  Boolean: Scalars['Boolean']
  Address: Address
  Point: Point
  Float: Scalars['Float']
  AccountsEdge: AccountsEdge
  PageInfo: PageInfo
  AddressesOrderBy: AddressesOrderBy
  AddressCondition: AddressCondition
  PointInput: PointInput
  AddressesConnection: AddressesConnection
  AddressesEdge: AddressesEdge
  UsersOrderBy: UsersOrderBy
  UserCondition: UserCondition
  UsersConnection: UsersConnection
  UsersEdge: UsersEdge
  Mutation: {}
  CreateAccountInput: CreateAccountInput
  AccountInput: AccountInput
  CreateAccountPayload: CreateAccountPayload
  CreateAddressInput: CreateAddressInput
  AddressInput: AddressInput
  CreateAddressPayload: CreateAddressPayload
  CreateUserInput: CreateUserInput
  UserInput: UserInput
  CreateUserPayload: CreateUserPayload
  UpdateAccountByIdInput: UpdateAccountByIdInput
  AccountPatch: AccountPatch
  UpdateAccountPayload: UpdateAccountPayload
  UpdateAddressByIdInput: UpdateAddressByIdInput
  AddressPatch: AddressPatch
  UpdateAddressPayload: UpdateAddressPayload
  UpdateUserByIdInput: UpdateUserByIdInput
  UserPatch: UserPatch
  UpdateUserPayload: UpdateUserPayload
  UpdateUserByUsernameInput: UpdateUserByUsernameInput
  DeleteAccountByIdInput: DeleteAccountByIdInput
  DeleteAccountPayload: DeleteAccountPayload
  DeleteAddressByIdInput: DeleteAddressByIdInput
  DeleteAddressPayload: DeleteAddressPayload
  DeleteUserByIdInput: DeleteUserByIdInput
  DeleteUserPayload: DeleteUserPayload
  DeleteUserByUsernameInput: DeleteUserByUsernameInput
  GetCurrentUserInput: GetCurrentUserInput
  GetCurrentUserPayload: GetCurrentUserPayload
}

export type AccountResolvers<
  ContextType = any,
  ParentType = ResolversTypes['Account']
> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>
  attributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>
  user?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>
  address?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>
  userByUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  addressByAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >
}

export type AccountsConnectionResolvers<
  ContextType = any,
  ParentType = ResolversTypes['AccountsConnection']
> = {
  nodes?: Resolver<
    Array<Maybe<ResolversTypes['Account']>>,
    ParentType,
    ContextType
  >
  edges?: Resolver<
    Array<ResolversTypes['AccountsEdge']>,
    ParentType,
    ContextType
  >
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
}

export type AccountsEdgeResolvers<
  ContextType = any,
  ParentType = ResolversTypes['AccountsEdge']
> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>
}

export type AddressResolvers<
  ContextType = any,
  ParentType = ResolversTypes['Address']
> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>
  line1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  postalCode?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  location?: Resolver<Maybe<ResolversTypes['Point']>, ParentType, ContextType>
  accountsByAddress?: Resolver<
    ResolversTypes['AccountsConnection'],
    ParentType,
    ContextType,
    AddressAccountsByAddressArgs
  >
}

export type AddressesConnectionResolvers<
  ContextType = any,
  ParentType = ResolversTypes['AddressesConnection']
> = {
  nodes?: Resolver<
    Array<Maybe<ResolversTypes['Address']>>,
    ParentType,
    ContextType
  >
  edges?: Resolver<
    Array<ResolversTypes['AddressesEdge']>,
    ParentType,
    ContextType
  >
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
}

export type AddressesEdgeResolvers<
  ContextType = any,
  ParentType = ResolversTypes['AddressesEdge']
> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>
  node?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>
}

export type CreateAccountPayloadResolvers<
  ContextType = any,
  ParentType = ResolversTypes['CreateAccountPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>
  userByUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  addressByAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >
  accountEdge?: Resolver<
    Maybe<ResolversTypes['AccountsEdge']>,
    ParentType,
    ContextType,
    CreateAccountPayloadAccountEdgeArgs
  >
}

export type CreateAddressPayloadResolvers<
  ContextType = any,
  ParentType = ResolversTypes['CreateAddressPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>
  addressEdge?: Resolver<
    Maybe<ResolversTypes['AddressesEdge']>,
    ParentType,
    ContextType,
    CreateAddressPayloadAddressEdgeArgs
  >
}

export type CreateUserPayloadResolvers<
  ContextType = any,
  ParentType = ResolversTypes['CreateUserPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>
  userEdge?: Resolver<
    Maybe<ResolversTypes['UsersEdge']>,
    ParentType,
    ContextType,
    CreateUserPayloadUserEdgeArgs
  >
}

export interface CursorScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor'
}

export interface DatetimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime'
}

export type DeleteAccountPayloadResolvers<
  ContextType = any,
  ParentType = ResolversTypes['DeleteAccountPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>
  deletedAccountId?: Resolver<
    Maybe<ResolversTypes['ID']>,
    ParentType,
    ContextType
  >
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>
  userByUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  addressByAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >
  accountEdge?: Resolver<
    Maybe<ResolversTypes['AccountsEdge']>,
    ParentType,
    ContextType,
    DeleteAccountPayloadAccountEdgeArgs
  >
}

export type DeleteAddressPayloadResolvers<
  ContextType = any,
  ParentType = ResolversTypes['DeleteAddressPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>
  deletedAddressId?: Resolver<
    Maybe<ResolversTypes['ID']>,
    ParentType,
    ContextType
  >
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>
  addressEdge?: Resolver<
    Maybe<ResolversTypes['AddressesEdge']>,
    ParentType,
    ContextType,
    DeleteAddressPayloadAddressEdgeArgs
  >
}

export type DeleteUserPayloadResolvers<
  ContextType = any,
  ParentType = ResolversTypes['DeleteUserPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  deletedUserId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>
  userEdge?: Resolver<
    Maybe<ResolversTypes['UsersEdge']>,
    ParentType,
    ContextType,
    DeleteUserPayloadUserEdgeArgs
  >
}

export type GetCurrentUserPayloadResolvers<
  ContextType = any,
  ParentType = ResolversTypes['GetCurrentUserPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>
  userEdge?: Resolver<
    Maybe<ResolversTypes['UsersEdge']>,
    ParentType,
    ContextType,
    GetCurrentUserPayloadUserEdgeArgs
  >
}

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export type MutationResolvers<
  ContextType = any,
  ParentType = ResolversTypes['Mutation']
> = {
  createAccount?: Resolver<
    Maybe<ResolversTypes['CreateAccountPayload']>,
    ParentType,
    ContextType,
    MutationCreateAccountArgs
  >
  createAddress?: Resolver<
    Maybe<ResolversTypes['CreateAddressPayload']>,
    ParentType,
    ContextType,
    MutationCreateAddressArgs
  >
  createUser?: Resolver<
    Maybe<ResolversTypes['CreateUserPayload']>,
    ParentType,
    ContextType,
    MutationCreateUserArgs
  >
  updateAccountById?: Resolver<
    Maybe<ResolversTypes['UpdateAccountPayload']>,
    ParentType,
    ContextType,
    MutationUpdateAccountByIdArgs
  >
  updateAddressById?: Resolver<
    Maybe<ResolversTypes['UpdateAddressPayload']>,
    ParentType,
    ContextType,
    MutationUpdateAddressByIdArgs
  >
  updateUserById?: Resolver<
    Maybe<ResolversTypes['UpdateUserPayload']>,
    ParentType,
    ContextType,
    MutationUpdateUserByIdArgs
  >
  updateUserByUsername?: Resolver<
    Maybe<ResolversTypes['UpdateUserPayload']>,
    ParentType,
    ContextType,
    MutationUpdateUserByUsernameArgs
  >
  deleteAccountById?: Resolver<
    Maybe<ResolversTypes['DeleteAccountPayload']>,
    ParentType,
    ContextType,
    MutationDeleteAccountByIdArgs
  >
  deleteAddressById?: Resolver<
    Maybe<ResolversTypes['DeleteAddressPayload']>,
    ParentType,
    ContextType,
    MutationDeleteAddressByIdArgs
  >
  deleteUserById?: Resolver<
    Maybe<ResolversTypes['DeleteUserPayload']>,
    ParentType,
    ContextType,
    MutationDeleteUserByIdArgs
  >
  deleteUserByUsername?: Resolver<
    Maybe<ResolversTypes['DeleteUserPayload']>,
    ParentType,
    ContextType,
    MutationDeleteUserByUsernameArgs
  >
  getCurrentUser?: Resolver<
    Maybe<ResolversTypes['GetCurrentUserPayload']>,
    ParentType,
    ContextType,
    MutationGetCurrentUserArgs
  >
}

export type NodeResolvers<
  ContextType = any,
  ParentType = ResolversTypes['Node']
> = {
  __resolveType: TypeResolveFn<'Query', ParentType, ContextType>
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
}

export type PageInfoResolvers<
  ContextType = any,
  ParentType = ResolversTypes['PageInfo']
> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  startCursor?: Resolver<
    Maybe<ResolversTypes['Cursor']>,
    ParentType,
    ContextType
  >
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>
}

export type PointResolvers<
  ContextType = any,
  ParentType = ResolversTypes['Point']
> = {
  x?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  y?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType = ResolversTypes['Query']
> = {
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  node?: Resolver<
    Maybe<ResolversTypes['Node']>,
    ParentType,
    ContextType,
    QueryNodeArgs
  >
  allAccounts?: Resolver<
    Maybe<ResolversTypes['AccountsConnection']>,
    ParentType,
    ContextType,
    QueryAllAccountsArgs
  >
  allAddresses?: Resolver<
    Maybe<ResolversTypes['AddressesConnection']>,
    ParentType,
    ContextType,
    QueryAllAddressesArgs
  >
  allUsers?: Resolver<
    Maybe<ResolversTypes['UsersConnection']>,
    ParentType,
    ContextType,
    QueryAllUsersArgs
  >
  accountById?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType,
    QueryAccountByIdArgs
  >
  addressById?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    QueryAddressByIdArgs
  >
  userById?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    QueryUserByIdArgs
  >
  userByUsername?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    QueryUserByUsernameArgs
  >
}

export type UpdateAccountPayloadResolvers<
  ContextType = any,
  ParentType = ResolversTypes['UpdateAccountPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>
  userByUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  addressByAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType
  >
  accountEdge?: Resolver<
    Maybe<ResolversTypes['AccountsEdge']>,
    ParentType,
    ContextType,
    UpdateAccountPayloadAccountEdgeArgs
  >
}

export type UpdateAddressPayloadResolvers<
  ContextType = any,
  ParentType = ResolversTypes['UpdateAddressPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>
  addressEdge?: Resolver<
    Maybe<ResolversTypes['AddressesEdge']>,
    ParentType,
    ContextType,
    UpdateAddressPayloadAddressEdgeArgs
  >
}

export type UpdateUserPayloadResolvers<
  ContextType = any,
  ParentType = ResolversTypes['UpdateUserPayload']
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>
  userEdge?: Resolver<
    Maybe<ResolversTypes['UsersEdge']>,
    ParentType,
    ContextType,
    UpdateUserPayloadUserEdgeArgs
  >
}

export type UserResolvers<
  ContextType = any,
  ParentType = ResolversTypes['User']
> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  accountsByUser?: Resolver<
    ResolversTypes['AccountsConnection'],
    ParentType,
    ContextType,
    UserAccountsByUserArgs
  >
}

export type UsersConnectionResolvers<
  ContextType = any,
  ParentType = ResolversTypes['UsersConnection']
> = {
  nodes?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >
  edges?: Resolver<Array<ResolversTypes['UsersEdge']>, ParentType, ContextType>
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
}

export type UsersEdgeResolvers<
  ContextType = any,
  ParentType = ResolversTypes['UsersEdge']
> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
}

export interface UuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID'
}

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>
  AccountsConnection?: AccountsConnectionResolvers<ContextType>
  AccountsEdge?: AccountsEdgeResolvers<ContextType>
  Address?: AddressResolvers<ContextType>
  AddressesConnection?: AddressesConnectionResolvers<ContextType>
  AddressesEdge?: AddressesEdgeResolvers<ContextType>
  CreateAccountPayload?: CreateAccountPayloadResolvers<ContextType>
  CreateAddressPayload?: CreateAddressPayloadResolvers<ContextType>
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>
  Cursor?: GraphQLScalarType
  Datetime?: GraphQLScalarType
  DeleteAccountPayload?: DeleteAccountPayloadResolvers<ContextType>
  DeleteAddressPayload?: DeleteAddressPayloadResolvers<ContextType>
  DeleteUserPayload?: DeleteUserPayloadResolvers<ContextType>
  GetCurrentUserPayload?: GetCurrentUserPayloadResolvers<ContextType>
  JSON?: GraphQLScalarType
  Mutation?: MutationResolvers<ContextType>
  Node?: NodeResolvers
  PageInfo?: PageInfoResolvers<ContextType>
  Point?: PointResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  UpdateAccountPayload?: UpdateAccountPayloadResolvers<ContextType>
  UpdateAddressPayload?: UpdateAddressPayloadResolvers<ContextType>
  UpdateUserPayload?: UpdateUserPayloadResolvers<ContextType>
  User?: UserResolvers<ContextType>
  UsersConnection?: UsersConnectionResolvers<ContextType>
  UsersEdge?: UsersEdgeResolvers<ContextType>
  UUID?: GraphQLScalarType
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>
