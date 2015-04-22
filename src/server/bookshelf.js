import Knex from 'knex';
import Bookshelf from 'bookshelf';
import knexConfig from '../../knexfile';

const knex = Knex(knexConfig[process.env.NODE_ENV]);

export default Bookshelf(knex);
