const route = require('express').Router();
const models = require('../models');
const user = models.User;

route.get('/user', (req, resp) => {
    user.findAll().then(users => {
        resp.send(users)
    });
})

route.get('/user/:id', (req, resp) => {
    user.findByPk(req.params.id).then(users => {
        resp.send(users)
    });
})

module.exports = route