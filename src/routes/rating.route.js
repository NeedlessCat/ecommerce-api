const express = require("express");
const router = express.Router();

const ratingContoller = require("../controller/rating.controller");
const authenticate = require("../middleware/authenticate");

router.post("/create", authenticate,ratingContoller.createRating);
router.put("/product/:productId", authenticate, ratingContoller.getAllRatings);

module.exports = router;