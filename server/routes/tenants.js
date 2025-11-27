const express = require("express");
const Tenant = require("../controllers/tenants.controller");

const router = express.Router();

router.get("/:id", Tenant.getWholeTenant);

module.exports = router;
