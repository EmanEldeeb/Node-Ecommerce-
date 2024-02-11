const express = require("express");
const shopController = require("../controllers/shopController");
const router = express.Router();

router.get("/products", shopController.getAllproductlist);
router.get("/", shopController.getproductlist);
router.get("/cart", shopController.getCart);
router.get("/orders", shopController.getOrders);
module.exports = router;
