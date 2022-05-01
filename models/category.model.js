const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    categoryTitle: { type: String, default: "" },
    categoryDescription: { type: String, default: "" },
    categoryName: { type: String, default: "" },
    categoryImage: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    showHome: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
