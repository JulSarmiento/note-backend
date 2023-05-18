const express = require('express');
const httpStatus = require('http-status');
const notesRouter = require('./notes.routes.js');
const usersRouter = require('./users.routes.js');

const router = express.Router();

router.get('/health', (_req, res) => {
  res.status(httpStatus.OK).json({
    status: 'OK',
    health: 'up',
    enviroment: process.env.ENVIRONMENT || 'Not Found'
  });
})
  .use('/notes', notesRouter)
  .use('/users', usersRouter);


module.exports = router;