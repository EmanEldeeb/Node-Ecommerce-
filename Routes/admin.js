const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admincontroller");

router.get("/add-product", adminController.getProductForm);
router.post("/add-product", adminController.collectProductData);
router.get("/admin-products", adminController.getAdminProducts);

module.exports = router;
