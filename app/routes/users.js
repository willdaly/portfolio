'use strict';
var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');

exports.login = (req, res)=>{
  res.render('users/login', {title: 'login'});
};

exports.authenticate = (req, res)=>{
  User.login(req.body, u=>{
    if (u) {
      req.session.userId = u._id;
    }else{
      req.session.userId = null;
    }
      res.redirect('/projects');
  });
};

exports.lookup = (req, res, next)=>{
  User.findByUserId(req.session.userId, u=>{
    //thing in express
    //object that you can put things in
    res.locals.user = u;
    next();
  });
};

exports.logout = (req, res)=>{
  req.session.userId = null;
  res.redirect('/');
};
