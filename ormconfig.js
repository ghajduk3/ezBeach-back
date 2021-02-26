const path = require('path') // eslint-disable-line
const envConfig = require('dotenv').config({
  path: path.resolve(
    __dirname,'environments',
    `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : '.development'}`,
  ),
});

function env(key) {
  return envConfig.parsed[key] || process.env[key];
}

const baseConfig = {
  type: 'postgres',
  database: env('DB_NAME'),
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  seeds: ['src/modules/database/seeds/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/modules/database/migrations',
  },
  synchronize: false,
  migrationsRun: true,
  logging: true,
  logger: 'file',
};

module.exports = {
  host: env('DB_HOST'),
  port: env('DB_PORT'),
  username: env('DB_USERNAME'),
  password: env('DB_PASSWORD'),
  synchronize: false,
  ...baseConfig,
};
