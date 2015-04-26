import bookshelf from '../../bookshelf';
import bcrypt from 'bcrypt';
import Promise from 'bluebird';
import {validate} from '../../../client/validation';
import {ValidationError} from '../../../lib/validation';

const User = bookshelf.Model.extend({
  tableName: 'user',

  initialize: function() {
    this.on('saving', this.validate);
  },

  validate: function() {
    return validate(this.attributes)
      .prop('name').required()
      .prop('email').required().email().custom((value, prop) => {
        return User.isEmailUnique(value).then(emailUnique => {
          if (!emailUnique)
            throw new ValidationError('This email is already associated with someone else', prop);
        });
      })
      .prop('password').required()
      .promise;
  },

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
  },

  isEmailUnique: function(email) {
    return User.forge({email}).fetch().then(user => !user);
  }
});

export default User;
