const db = require("../models");
const { body, validationResult } = require('express-validator');
const { __ } = require("i18n");
const Team = db.teams;
const Op = db.Sequelize.Op;


// Retrieve all Teams from the database.
exports.findAll = (req, res) => {
    Team.findAll()
    .then(data => {
      res.status(200).send({message: res.__('com.api.radar.success.200'),data});
    })
    .catch(err => {
      res.boom.badImplementation()
    });
};


exports.createTeam = (req, res) => {

// Create a Team
  const team = {
    NAME: req.body.name
  };

  //Validar si existe un usuario con el mismo nombre en el sistema
  Team.findAll({where: {Name: team.NAME}}).then(
    data => {
        if (data!='') {
            res.boom.conflict(res.__('com.api.radar.error.409'))
        } else {
              // Save Team in the database
            Team.create(team)
            .then(data => {
                res.status(201).send({message: res.__('com.api.radar.success.201'),data});
            })
            .catch(err => {
              res.boom.badImplementation()
            });  
        }   
    });
};

exports.findById = (req, res) => {

    const team = {
        id: req.body.id
    };

    Team.findAll({where: {id: team.id}})
    .then(data => {
        res.status(200).send({message: res.__('com.api.radar.success.200'),data});
    })
    .catch(err => {
      res.boom.badImplementation()
    });
};

exports.update = (req, res) => {

    const team = {
        id: req.body.id,
        ACTIVE: req.body.active
    };

    Team.update({ ACTIVE: team.ACTIVE }, {where: {id: team.id}})
    .then(num => {
        if (num == 1) {
          res.status(200).send({message:res.__('com.api.radar.success.200')})
        } else {
          res.boom.notFound(res.__('com.api.radar.error.404'))
        }
      })
    .catch(err => {
      res.boom.badImplementation()
    });
};

