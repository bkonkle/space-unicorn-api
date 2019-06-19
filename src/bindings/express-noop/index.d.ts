declare module 'express-noop' {
  import {Application} from 'express'

  const noop: () => Application

  export = noop
}
