const mongoose = require("mongoose");

let AboutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

let ReferancesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: true },
    referanceLink: { type: String, required: true },
    referanceMail: { type: String, required: true },
    referanceGsm: { type: String, required: true },
  },
  { timestamps: true }
);

let BissunessSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const CreditsSchema = new mongoose.Schema(
  {
    about: [AboutSchema],
    business: [BissunessSchema],
    referances: [ReferancesSchema],
    showHome: { type: Boolean, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Credits = mongoose.model("Credits", CreditsSchema);

module.exports = Credits;
