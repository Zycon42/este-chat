import config from '../../config';
import express from 'express';
import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';
import jwt from 'jsonwebtoken';
import User from '../user/model';

passport.use(new LocalStrategy(
  function(username, password, done) {
    let scope = {};
    User.forge({username}).fetch({require: true}).then(user => {
      scope.user = user;
      return user.authenticate(password);
    }).then(authenticated => {
      if (!authenticated) {
        return done(null, false, {message: 'This password is not correct.'});
      }
      return done(null, scope.user);
    }).catch(err => {
      return done(err);
    });
  }
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
