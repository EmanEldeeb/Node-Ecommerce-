const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admincontroller");

router.get("/add-product", adminController.getProductForm);
router.post("/add-product", adminController.collectProductData);

module.exports = router;
