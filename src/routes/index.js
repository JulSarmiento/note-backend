const express = require('express');
const httpStatus = require('http-status');

const router = express.Router();

router.get('/health', (_req, res) => {
  res.status(httpStatus.OK).json({
    status: 'OK',
    health: 'up',
    enviroment: process.env.ENVIRONMENT || 'Not Found'
  });
})


module.exports = router;