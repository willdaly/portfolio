'use strict';

var multiparty = require('multiparty');
var projects = global.nss.db.collection('projects');
var fs = require('fs');

exports.index = (req, res)=>{
  projects.find().toArray((error, projects) =>{
    res.render('projects/index', {projects: projects, title:'projects'});
  });
  // res.render('portfolios/index', {title:'portfolios'});
};

exports.new = (req, res)=>{
  res.render('projects/new', {title:'new portfolio'});
};

exports.create = (req, res)=>{
  var form = new multiparty.Form();

  form.parse(req, (err, fields, files)=>{
    var project = {};
    project.title = fields.title[0];
    project.description = fields.description[0];
    project.tags= fields.tags[0].split(',');
    project.git = fields.git[0];
    project.app = fields.app[0];
    project.date = new Date(fields.date[0]);
    project.photos = [];
    files.photos.forEach(p=>{
      //put in user id and title of the project
      fs.renameSync(p.path, `${__dirname}/../static/img/${p.originalFilename}`);
      project.photos.push(p.originalFilename);
    });
    projects.save(project, ()=>res.redirect('/projects'));
  });
};
