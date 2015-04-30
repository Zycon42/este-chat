import config from '../../config';
import jwt from 'jsonwebtoken';
import User from './model';
import {ValidationError} from '../../../lib/validation';

export function create(req, res) {
  User.encryptPassword(req.body.password).then(hash => {
    return User.forge({
      name: req.body.name, email: req.body.email, password: hash
    }).save();
  }).then(user => {
    var token = jwt.sign({ id: user.id }, config.secret);
    res.cookie('token', token);
    res.status(201).location(user.id).json(user.toJSON());
  }).catch(error => {
    if (error instanceof ValidationError)
      return res.status(400).json(error);

    console.error(error);
    return res.status(500).send('Unexpected error');
  });
}
