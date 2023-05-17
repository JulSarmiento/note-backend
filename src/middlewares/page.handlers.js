const httpStatus = require('http-status');

const pageNotFound = (req, res, _next) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: httpStatus.NOT_FOUND,
    path: req.path,
    message: 'Page not found'
  });
};

module.exports = pageNotFound;
