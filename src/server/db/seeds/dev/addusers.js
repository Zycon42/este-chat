'use strict';

var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('user').del(),

        // Inserts seed entries
        knex('user').insert({username: 'admin', password: bcrypt.hashSync('nfshp2', 10)})
    );
};
