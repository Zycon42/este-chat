exports.up = function(knex, Promise) {
  return Promise.join(
    knex.schema.createTable('user', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
    })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
