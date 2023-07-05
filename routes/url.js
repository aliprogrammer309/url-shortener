const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleGetUpdate,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get('/:shortId', handleGetUpdate)
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
