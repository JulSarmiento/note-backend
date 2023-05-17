const Joi = require('joi');

// "Users schema validation"
exports.createUserSchema = Joi.object({
  username: Joi.string().required(),
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  genre: Joi.string().required(),
  active: Joi.boolean().required(),
});

exports.updateUserSchema = Joi.object({
  username: Joi.string().required(),
  name: Joi.string().optional(),
  lastname: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().optional(),
  genre: Joi.string().optional(),
  active: Joi.boolean().optional(),
});