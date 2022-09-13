const { Router } = require("express");
const router = Router();

const { commentControllers } = require("../controllers/comment.controllers");

router.post("post/comments", commentControllers.addComment);
router.delete("post/comments/:id", commentControllers.deleteComment);
router.get("post/:id/comments", commentControllers.showCommentsByPost);

module.exports = router;
