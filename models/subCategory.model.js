const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema(
  {
    categoryId: { type: String, required: true },
    subCategoryName: { type: String, default: "" },
    subCategoryTitle: { type: String, default: "" },
    subCategoryDescription: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    showHome: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const SubCategory = mongoose.model("SubCategory", SubCategorySchema);

module.exports = SubCategory;
