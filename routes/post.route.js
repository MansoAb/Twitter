const { Router } = require("express");
const router = Router();

const { postControllers } = require("../controllers/post.controller");

router.post("/posts", postControllers.addPost);
router.delete("/posts/:id", postControllers.deletePost);
router.get("/posts", postControllers.showPosts);
router.patch("/posts/:id", postControllers.likePost);

module.exports = router;
