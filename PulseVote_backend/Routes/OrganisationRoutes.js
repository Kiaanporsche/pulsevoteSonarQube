const express = require("express");
const { protect } = require("../MiddleWare/authMiddleware");
const { requireRole } = require("../MiddleWare/roleMiddleware");
const {
  createOrganisation,
  getMyOrganisations,
  generateJoinCode,
  joinOrganisation
} = require("../Controllers/OrganisationController");

const router = express.Router();

router.get("/my-organisations", protect, getMyOrganisations);
router.post("/create-organisation", protect, requireRole("manager"), createOrganisation);
router.post("/generate-join-code/:organisationId", protect, requireRole("manager"), generateJoinCode);
router.post("/join-organisation", protect, joinOrganisation);

module.exports = router;