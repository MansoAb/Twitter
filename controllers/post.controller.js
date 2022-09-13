const Post = require("../models/Post.model");

module.exports.postControllers = {
  addPost: async (req, res) => {
    const { title, user, likes } = req.body;
    try {
      const post = await Post.create({ title, user, likes });
      res.json(post);
    } catch (err) {
      res.json(err.message);
    }
  },
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndRemove(req.params.id);
      res.json("Post deleted");
    } catch (err) {
      res.json(err.message);
    }
  },
  showPosts: async (req, res) => {
    try {
      const posts = await Post.find().populate("user likes", "name name");
      res.json(posts);
    } catch (err) {
      res.json(err.message);
    }
  },
  likePost: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Post.findById(id);
      if (post.likes.includes(req.body.user)) {
        await Post.findByIdAndUpdate(id, { $pull: { likes: req.body.user } });
        res.json("Like been delete");
      } else {
        await Post.findByIdAndUpdate(id, { $push: { likes: req.body.user } });
        res.json("Like been add");
      }
    } catch (err) {
      res.json(err.message);
    }
  },
};
