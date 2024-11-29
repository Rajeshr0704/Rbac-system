const express = require('express');
const {authenticate, authorize} = require('../middleware/authMiddleware');

const router = express.Router();
router.get("/admin", authenticate, authorize(["Admin"]), (req, res) =>{
    res.status(200).json({message:'Welcome Admin'});
});

router.get("/user", authenticate, authorize(["User"]), (req, res)=>{
    res.status(200).json({message:'Welcome User'});
});

module.exports = router;
