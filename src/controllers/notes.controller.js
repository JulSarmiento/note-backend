const httpStatus = require("http-status");

const { Note } = require("../models");
const { User } = require("../models");

exports.getAll = async (_req, res, next) => {
  try {
    const notes = await Note.find({});
    res.status(httpStatus.OK).json(notes);
  } catch (error) {
    next(error);
  }
};

exports.getByid = async (req, res, next) => {
  const { id } = req.params;
  const { username } = req.body;
  try {
    const user = await User.findById(username);
    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "User not found",
      });
    }

    const note = await Note.findById(id);
    if (!note) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Note not found",
      });
    }
    res.status(httpStatus.OK).json({
      user: user.username,
      note
    });
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, username, content, isPublic, isDeleted } = req.body;
    const user = await User.findById(username);
    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "User not found",
      });
    }
    const newNote = {
      title,
      username: username._id,
      content,
      isPublic,
      isDeleted
    }
    await Note.create(newNote);
    res.status(httpStatus.CREATED).json({
      success: true,
      user: user.username,
      data: newNote,
    });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Note not found",
      });
    }
    await Note.updateOne({ _id: id }, req.body);
    res.status(httpStatus.OK).json({
      sucess: true,
      message: await Note.findById(id),
    });
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Note not found",
      });
    }
    await Note.updateOne({ _id: id }, { isDeleted: true });
    res.status(httpStatus.OK).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
