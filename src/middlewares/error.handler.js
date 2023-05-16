const httpStatus = require('http-status');

const errorHandler = (err, _req, res, _next) => {
  const { message, statusCode } = err;
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    status: statusCode,
    message
  });
};

module.exports = errorHandler;