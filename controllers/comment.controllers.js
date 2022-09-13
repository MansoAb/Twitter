const Comment = require("../models/Comment.model");

module.exports.commentControllers = {
  addComment: async (req, res) => {
    const { userId, text, postId } = req.body;
    try {
      const comment = await Comment.create({ userId, text, postId });
      res.json(comment);
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteComment: async (req, res) => {
    const { id } = req.params;
    try {
      await Comment.findByIdAndRemove(id);
      res.json("Comment deleted");
    } catch (err) {
      res.json(err.message);
    }
  },
  showCommentsByPost: async (req, res) => {
    try {
      const comments = await Comment.find({ postId: id }).populate(
        "userId postId",
        "name title"
      );
      res.json(comments);
    } catch (err) {
      res.json(err.message);
    }
  },
};
