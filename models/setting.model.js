const mongoose = require("mongoose");

const SettingSchema = new mongoose.Schema(
  {
    adress:{type:String, default:''},
    gsm:{type:String, default:''},
    phone:{type:String, default:''},
    mail:{type:String, default:''},
    instagram:{type:String, default:''},
    facebook:{type:String, default:''},
    twitter:{type:String, default:''},
    linkedin:{type:String, default:''},
    google:{type:String, default:''},
    pinterest:{type:String, default:''},
  },
  { timestamps: true }
);

const Setting = mongoose.model("Setting", SettingSchema);

module.exports = Setting;
