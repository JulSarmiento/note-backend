const express = require('express');
const httpStatus = require('http-status');
const usersRouter = require('./users.routes.js');
const notesRouter = require('./notes.routes.js');

const router = express.Router();

router.get('/health', (_req, res) => {
  res.status(httpStatus.OK).json({
    status: 'OK',
    health: 'up',
    enviroment: process.env.ENVIRONMENT || 'Not Found'
  });
})
  .use('/users', usersRouter)
  .use('/notes', notesRouter);


module.exports = router;