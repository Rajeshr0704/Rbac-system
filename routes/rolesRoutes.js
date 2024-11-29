const express = require("express");
const { assignRole } = require("../controllers/roleController");
const {authenticate,authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Assign Role API (admin only)
router.post("/assign", authenticate, authorize("admin"), assignRole);

module.exports = router;
