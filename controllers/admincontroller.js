const productClass = require("../models/datamodule").productclass;

exports.getProductForm = (req, res) => {
  res.render("admin/add-product", {
    pageTitle: "product form",
    path: "/admin/add-product",
  });
};

exports.collectProductData = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const newProduct = new productClass(title, imageUrl, price, description);
  console.log(newProduct);
  newProduct.save();
  res.redirect("/");
};
