const express = require("express");
const { protect } = require("../MiddleWare/authMiddleware");
const { requireRole } = require("../MiddleWare/roleMiddleware");
const {
  createPoll,
  votePoll,
  getPollResults,
  getOrgPolls,
  closePoll,
  openPoll
} = require("../Controllers/pollController");

const router = express.Router();

router.post("/create-poll", protect, requireRole("manager"), createPoll);
router.post("/vote/:pollId", protect, requireRole("user"), votePoll);
router.get("/get-poll-results/:pollId", protect, getPollResults);
router.get("/get-polls/:organisationId", protect, getOrgPolls);
router.post("/close/:pollId", protect, closePoll);
router.post("/open/:pollId", protect, openPoll);

module.exports = router;