const express = require('express');
const server = express();
const recipe = require('./api/recipe-router');

server.use(express.json());
server.use('/api/recipe', recipe)

module.exports = server