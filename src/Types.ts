declare global {
  namespace Express {
    export interface Request {
      // @ts-ignore - override the User type
      user?: User
    }
  }
}

export interface User {
  iss: string
  sub: string
  aud: string[]
  iat: number
  exp: number
  azp: string
  scope: string
}
