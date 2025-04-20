const express = require("express");
const router = express.Router();
const {
  createUserController,
  getUserDetailsController,
} = require("../../controllers/userController/user.controller");

router.post("/create_user", createUserController);
router.get("/user_details", getUserDetailsController);

module.exports = router;
