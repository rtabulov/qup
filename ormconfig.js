module.exports = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'example',
  database: 'test',
  type: 'postgres',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  seeds: ['dist/seeds/**/*{.ts,.js}'],
  factories: ['dist/factories/**/*{.ts,.js}'],
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
};
