const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema(
  {
    brandName: { type: String, default: "" },
    brandTitle: { type: String, default: "" },
    brandDescription: { type: String, default: "" },
    brandImage: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    showHome: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Brand = mongoose.model("Brand", BrandSchema);

module.exports = Brand;
