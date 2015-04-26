import config from '../../config';
import express from 'express';
import Promise from 'bluebird';
import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import jwt from 'jsonwebtoken';
import User from '../user/model';

passport.use(new LocalStrategy(
  Promise.coroutine(function*(username, password, done) {
    try {
      const user = yield User.forge()
        .query({where: {name: username}, orWhere: {email: username}})
        .fetch({require: true});
      if (!(yield user.authenticate(password)))
        return done(null, false, {message: 'This password is not correct.'});
      return done(null, user);
    } catch (e) {
      return done(e);
    }
  })
));

let router = express.Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({message: 'Authentication failed!'});
    }

    var token = jwt.sign({ id: user.id }, config.secret);
    res.json({ token : token });
  })(req, res, next);
});

export default router;
