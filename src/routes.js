const express = require("express");
const router = express.Router();

const userController = require("./controllers/UserController");

router.get("/users", userController.index);
router.post("/users", userController.store);

module.exports = router;
