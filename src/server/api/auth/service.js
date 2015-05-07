import jwt from 'jsonwebtoken';
import compose from 'composable-middleware';
import config from '../../config';
import User from '../user/model';

export function validateToken() {
  return compose().use((req, res, next) => {
    const token = req.cookies.token;
    if (!token)
      return next();

    jwt.verify(token, config.secret, {algorithms: ['HS256']}, (err, decoded) => {
      if (err) return next(err);

      User.forge({id: decoded.id}).fetch({require: true}).then(user => {
        req.user = user.toJSON();
        return next();
      }).catch(err => {
        return next(err);
      });
    });
  });
}

export function isAuthenticated() {
  return compose()
    .use(validateToken())
    .use((req, res, next) => {
      if (!req.user)
        res.status(401).json({message: 'Authentication token is invalid!'});

      next();
    });
}
