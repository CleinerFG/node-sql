const express = require("express");
const router = express.Router();

const userController = require("./controllers/userController");
const addressController = require("./controllers/addressController");

router.get("/users", userController.index);
router.post("/users", userController.store);

router.get("/users/:userId/addresses", addressController.index);
router.post("/users/:userId/addresses", addressController.store);

module.exports = router;
