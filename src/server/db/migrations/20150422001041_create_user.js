'use strict';

exports.up = function(knex, Promise) {
  return Promise.join(
    knex.schema.createTable('user', function(table) {
      table.increments('id').primary();
      table.string('username').unique().notNullable();
      table.string('password').notNullable();
    })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
