import dotenv from 'dotenv'

dotenv.config()

export namespace Database {
  export const url =
    process.env.DATABASE_URL ||
    'postgres://unicorn_root:password@localhost:5432/unicorn'
}

export namespace Server {
  export const port = Number(process.env.PORT || '8000')
  export const bodyLimit = '100kb'
  export const corsHeaders = ['Link']
}

export namespace Auth {
  export const jwksUri =
    process.env.AUTH0_JWKS_URI ||
    'https://space-unicorn.auth0.com/.well-known/jwks.json'
  export const audience =
    process.env.AUTH0_AUDIENCE || 'https://unicorn.deterministic.dev'
  export const issuer =
    process.env.AUTH0_ISSUER || 'https://space-unicorn.auth0.com/'
}

export namespace Environment {
  export const isDev = process.env.NODE_ENV === 'development'
}

export default {Database, Server, Auth, Environment}
