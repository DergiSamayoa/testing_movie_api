const { getAll, getOne, remove, update, create } = require('../controllers/genre.controllers');
const express = require('express');

const routerGenre = express.Router();

routerGenre.route('/')
    .get(getAll)
    .post(create);

routerGenre.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerGenre;