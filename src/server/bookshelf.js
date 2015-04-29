import Knex from 'knex';
import Bookshelf from 'bookshelf';
import knexConfig from '../../knexfile';

const knex = Knex(knexConfig[process.env.NODE_ENV]);

const Orm = Bookshelf(knex);
Orm.plugin('visibility');

export default Orm;
