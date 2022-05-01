const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    categoryId: { type: String, default: "" },
    brandId: { type: String, default: "" },
    brandName: { type: String, default: "" },
    productImg: { type: String, default: "" },
    productName: { type: String, default: "" },
    stockAmount: { type: String, default: "" },
    productTitle: { type: String, default: "" },
    productDescription: { type: String, default: "" },
    productComments: { type: Array },
    price: { type: String, default: "" },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
