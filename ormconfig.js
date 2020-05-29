require('dotenv').config()

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/db/migrations/**/*.ts'],
  synchronize: false,
  migrationsRun: true,
  cli: {
    migrationsDir: 'src/db/migrations'
  }
}
