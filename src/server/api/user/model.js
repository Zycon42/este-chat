import bookshelf from '../../bookshelf';
import bcrypt from 'bcrypt';
import Promise from 'bluebird';

const User = bookshelf.Model.extend({
  tableName: 'user',

  authenticate: function(password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, this.get('password'), (err, res) => {
        if (err)
          reject(err);
        else
          resolve(res);
      });
    });
  }
}, {
  encryptPassword: function(password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err)
          reject(err);
        else
          resolve(hash);
      });
    });
  }
});

export default User;
