require('dotenv').config()

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/db/migration/**/*.ts'],
  synchronize: false,
  migrationsRun: true,
  cli: {
    migrationsDir: 'src/db/migration'
  }
}
