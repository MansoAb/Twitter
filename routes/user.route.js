const { Router } = require("express");
const router = Router();

const { userControllers } = require("../controllers/user.controller");

router.get("/users", userControllers.showUsers);
router.delete("/users/:id", userControllers.deleteUser);
router.post("/users", userControllers.addUser);
router.patch("/users/:id", userControllers.userSaves);

module.exports = router;
