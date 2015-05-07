var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('user').del(),

    // Inserts seed entries
    knex('user').insert({name: 'Zycon', email: 'jan.dusek90@gmail.com', password: bcrypt.hashSync('nfshp2', 10)})
  );
};
