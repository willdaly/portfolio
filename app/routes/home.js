'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'portfolio'});
};

exports.about = (req, res)=>{
  res.render('home/about', {title: 'about'});
};

exports.faq = (req, res)=>{
  res.render('home/faq', {title: 'faq'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {title: 'contact'});
};

exports.resume = (req, res)=>{
  res.render('home/resume', {title: 'resume'});
};

exports.help = (req, res)=>{
  res.render('home/help', {title: 'Node.js: Help'});
};
