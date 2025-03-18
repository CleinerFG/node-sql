const express = require("express");
const router = express.Router();

const userController = require("./controllers/userController");
const addressController = require("./controllers/addressController");
const techController = require("./controllers/techController");
const reportController = require("./controllers/reportController");

router.get("/users", userController.index);
router.post("/users", userController.store);

router.get("/users/:userId/addresses", addressController.index);
router.post("/users/:userId/addresses", addressController.store);

router.get("/users/:userId/techs", techController.index);
router.post("/users/:userId/techs", techController.store);
router.delete("/users/:userId/techs", techController.delete);

router.get("/report", reportController.show);

module.exports = router;
