const express = require("express");
const Tenant = require("../controllers/tenants.controller");

const router = express.Router();

router.get("/:id", Tenant.getWholeTenant);
router.get(
  "/:tenantId/section/:sectionId/details",
  Tenant.getTenantSectionDetails
);

module.exports = router;
