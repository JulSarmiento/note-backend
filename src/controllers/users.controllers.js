const httpStatus = require("http-status");

const { User, Note } = require("../models");

exports.getAll = async (_req, res, next) => {
  try {
    const users = await User.find().populate("notes");
    res.status(httpStatus.OK).json(users);
  } catch (error) {
    next(error);
  }
};

exports.getByid = async (req, res, next) => {
  const { id } = req.params;

  try {
    // const user = await User.aggregate([
    //   {
    //     $match: {
    //       _id: id,
    //     },
    //     $lookup: {
    //       from: "notes",
    //       localField: "notes",
    //       foreignField: "_id",
    //       as: "notes",
    //     },
    //   },
    // ]);

    const user = await User.aggregate([
      {
        $match: {
          username: username,
        },
      },
      {
        $lookup: {
          from: "notes",
          localField: "notes",
          foreignField: "username",
          as: "notes",
        },
      },
    ])
    // const user = await User.findById(id).populate({match: "username" , model: Note});
    res.status(httpStatus.OK).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.find(id);

    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "User not found",
      });
    }

    await User.updateOne({ _id: id }, req.body);
    res.status(httpStatus.OK).json({
      success: true,
      message: await User.findById(id),
    });
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "User not found",
      });
    }

    await User.deleteOne({ _id: id });
    res.status(httpStatus.OK).json({
      success: true,
      message: `User ${user.name} deleted`,
    });
  } catch (error) {
    next(error);
  }
};
