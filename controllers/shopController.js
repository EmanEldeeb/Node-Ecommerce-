const productsclass = require("../models/datamodule").productclass;
exports.getproductlist = (req, res) => {
  productsclass.fetchAll((products) => {
    res.render("shop/index", { pageTitle: "Shop", prods: products, path: "/" });
  });
};
