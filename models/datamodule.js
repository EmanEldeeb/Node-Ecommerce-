const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "productsList.json"
);
exports.productclass = class {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    console.log("saving product");
    fs.readFile(p, (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) =>
        console.log("write product error", err)
      );
    });
  }

  static fetchAll(cb) {
    fs.readFile(p, (err, data) => {
      if (!err) {
        return cb(JSON.parse(data));
      }
      cb([]);
    });
  }
};
