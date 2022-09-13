const User = require("../models/User.model");

module.exports.userControllers = {
  addUser: async (req, res) => {
    const { name, saves } = req.body;
    try {
      await User.create({ name, saves });
      res.json("Пользователь создан.");
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.body;
    try {
      await User.findByIdAndRemove(id);
      res.json("User was delete");
    } catch (err) {
      res.json(err.meessage);
    }
  },
  showUsers: async (req, res) => {
    const { id } = req.body;
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.json(err.message);
    }
  },
  userSaves: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (user.saves.includes(req.body.post)) {
        await User.findByIdAndUpdate(reg.params.id, {
          $pull: { saves: req.body.post },
        });
        res.json("not");
      } else {
        await User.findByIdAndUpdate(id, { $push: { saves: req.body.post } });
        res.json("yet");
      }
    } catch (err) {
      res.json(err);
    }
  },
};
