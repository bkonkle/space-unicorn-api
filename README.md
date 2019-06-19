# Space Unicorn API

This is an Express-based application server written in TypeScript. It uses GraphQL via [Postgraphile](https://www.graphile.org/) to communicate with clients.

## Installation

### Dependencies

Install dependencies with [Yarn](http://yarnpkg.com):

    $ yarn

This should install the ReasonML and BuckleScript platform to compile the code to JavaScript.

### Local Database

To use Postgres locally, first set up a local superuser (if you haven't already):

    sudo -u postgres createuser -s $USER
    createdb $USER -O $USER

Then set up a user for Space Unicorn:

    createuser -s unicorn_root
    createdb unicorn -O unicorn_root

    psql -c "ALTER USER unicorn_root WITH PASSWORD 'password';"

## Running the Application

To run in development mode:

    $ yarn dev

## Architecture

### Express

The core of the application is an Express server with some middleware:

- [body-parser](https://github.com/expressjs/body-parser)
- [cors](https://github.com/expressjs/cors)
