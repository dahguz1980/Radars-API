const express = require('express')
const teams = require("../controllers/team.controller.js");
const router = express.Router()


router.post("/list", teams.findAll);

router.post("/create", teams.createTeam);

router.post("/list-id", teams.findById);

router.post("/update", teams.update);





module.exports = router