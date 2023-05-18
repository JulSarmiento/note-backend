const httpStatus = require('http-status');

const Note = require('../models/notes.model');

exports.getAll = async (_req, res, next) => {
  try {
    const notes = await Note.find({});
    res.status(httpStatus.OK).json(notes);
  } catch (error) {
    next(error);
  };
};

exports.getByid = async (req, res, next) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if(!note) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Note not found',
      });
    }
    res.status(httpStatus.OK).json(note);
  } catch (error) {
    next(error);
  };
};

exports.create = async (req, res, next) => {
  try {
    const note = await Note.create(req.body);
    res.status(httpStatus.CREATED).json(note);
  } catch (error) {
    next(error);
  };
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if(!note) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Note not found',
      });
    }
    await Note.updateOne({ _id: id }, req.body);
    res.status(httpStatus.OK).json({
      sucess: true,
      message: await Note.findById(id)
    });
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;

  try{
    const note = await Note.findById(id);
    if(!note) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Note not found',
      });
    }
    await Note.updateOne({ _id: id }, { isDeleted: true });
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Note deleted successfully',
    });
  }
  catch (error) {
    next(error);
  } 
};