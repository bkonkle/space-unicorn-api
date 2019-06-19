import http from 'http'
import express, {Express, Request, Response, NextFunction} from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import chalk from 'chalk'
import jwt from 'express-jwt'
import jwks from 'jwks-rsa'
import playground from 'graphql-playground-middleware-express'
import noop from 'express-noop'
import {PostGraphileOptions, postgraphile} from 'postgraphile'
import {MiddlewareOptions as PlaygroundOptions} from 'graphql-playground-html'

import {Database, Server, Auth, Environment} from './Config'
import Plugins from './Plugins'

export async function create () {
  const app = express()

  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: Auth.jwksUri
    }),
    audience: Auth.audience,
    issuer: Auth.issuer,
    algorithms: ['RS256'],
    credentialsRequired: false
  })

  const options: PostGraphileOptions = {
    appendPlugins: Plugins.plugins,
    // @ts-ignore - express vs plain http
    additionalGraphQLContextFromRequest: async (req: Request) => ({
      user: req.user
    }),
    handleErrors: Plugins.handleErrors,
    // @ts-ignore - express vs plain http
    pgSettings: Plugins.pgSettings
  }

  const playgroundOpts: PlaygroundOptions = {
    endpoint: '/graphql',
    settings: {
      // @ts-ignore - incomplete type
      'schema.polling.enable': false
    }
  }

  app
    .disable('x-powered-by')
    .use(morgan(Environment.isDev ? 'dev' : 'combined'))
    .get('/', (_req, res) => {
      res.send('ok')
    })
    .get('/graphql', Environment.isDev ? playground(playgroundOpts) : noop())
    .use(jwtCheck)
    .use(bodyParser.json())
    .use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
      console.error(err)

      res.status(400).send('{}')
    })
    .use(postgraphile(Database.url, 'public', options))

  return app
}

export async function main () {
  let app = await create()

  const server = http.createServer(app)

  server.listen(Server.port, () => {
    console.log(chalk.cyan(`> Started API on port ${chalk.yellow(Server.port.toString())}`))
  })

  function replaceApp (newApp: Express) {
    server.removeListener('request', app)
    server.on('request', newApp)
    app = newApp
  }

  return replaceApp
}

export default {create, main}
