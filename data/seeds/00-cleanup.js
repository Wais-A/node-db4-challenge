const cleaner = require('knex-cleaner');

export.seed = function(knex) {
  return cleaner.clean(knex, {
    ignoreTables: ['knex_migrations', 'knex_migrations_lock']
  })
}
