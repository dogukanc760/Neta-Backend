const mongoose = require("mongoose");

const CampaingSchema = new mongoose.Schema(
  {
    campaingName: { type: String, default: "" },
    campaingTitle: { type: String, default: "" },
    campaingDescription: { type: String, default: "" },
    campaingImage: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    showHome: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Campaing = mongoose.model("Campaing", CampaingSchema);

module.exports = Campaing;
