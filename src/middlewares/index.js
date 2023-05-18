const {
  createUserSchema,
  updateUserSchema,
  createNoteSchema,
  updateNoteSchema,
} = require("../models/joi.model");

// Error Handlres
exports.errorHandler = require("./error.handler");
exports.pageNotFound = require("./page.handlers");

// Joi Handlers
const validate = require("./joi.handlers");

exports.validateCreateUser = validate(createUserSchema);
exports.validateUpdateUser = validate(updateUserSchema);
exports.validateCreateNote = validate(createNoteSchema);
exports.validateUpdateNote = validate(updateNoteSchema);