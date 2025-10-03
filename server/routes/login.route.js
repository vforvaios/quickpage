const express = require("express");
const verifyToken = require("../utils/verifyToken");
const Login = require("../controllers/login.controller");

const router = express.Router();

router.post("/", Login.loginUser);
router.post("/admin", Login.loginUserAdmin);
router.post("/forgot", Login.forgotUserPassword);
router.post("/changepassword", [verifyToken], Login.changeUserPassword);

module.exports = router;
