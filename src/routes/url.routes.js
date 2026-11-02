const express = require('express');
const { createshorturl, redirectToOriginal } = require("../controllers/url.controller.js");

const router = express.Router();

router.post("/shorten", createshorturl);
router.get("/:code", redirectToOriginal);

module.exports = router;