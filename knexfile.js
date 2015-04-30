module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'este-test',
      user:     'postgres',
      password: 'nfshp2'
    },
    migrations: {
      directory: './src/server/db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './src/server/db/seeds/dev'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './src/server/db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './src/server/db/seeds/prod'
    }
  }

};
