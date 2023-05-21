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
  notes: Joi.array().optional()
});

exports.updateUserSchema = Joi.object({
  username: Joi.string().required(),
  name: Joi.string().optional(),
  lastname: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().optional(),
  genre: Joi.string().optional(),
  active: Joi.boolean().optional(),
  notes: Joi.array().optional()
});

exports.createNoteSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  username: Joi.string().optional(),
  isPublic: Joi.boolean().required(),
  isDeleted: Joi.boolean().required()
});

exports.updateNoteSchema = Joi.object({
  title: Joi.string().optional(),
  content: Joi.string().optional(),
  username: Joi.string().optional(),
  isPublic: Joi.boolean().optional(),
  isDeleted: Joi.boolean().optional()
});