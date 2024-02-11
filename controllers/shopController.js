const productsclass = require("../models/datamodule").productclass;
exports.getproductlist = (req, res) => {
  productsclass.fetchAll((products) => {
    res.render("shop/index", { pageTitle: "Shop", prods: products, path: "/" });
  });
};
exports.getAllproductlist = (req, res) => {
  productsclass.fetchAll((products) => {
    res.render("shop/index", {
      pageTitle: "Shop",
      prods: products,
      path: "/products",
    });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", { pageTitle: "Cart", path: "/cart" });
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", { pageTitle: "Orders", path: "/orders" });
};
