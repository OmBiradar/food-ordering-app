const express = require('express');
const {registerController} = require("../controllers/authController");

const router = express.Router();

router.get("/register", registerController);

// exports
module.exports = router;