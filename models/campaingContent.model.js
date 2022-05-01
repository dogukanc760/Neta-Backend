const mongoose = require("mongoose");

let ItemSchema = new mongoose.Schema(
  {
    productId: { type: String, default: ""},
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

const CampaingContentSchema = new mongoose.Schema(
  {
    campaingId: { type: String, default: "" },
    items: [ItemSchema],
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const CampaingContent = mongoose.model(
  "CampaingContent",
  CampaingContentSchema
);

module.exports = CampaingContent;
