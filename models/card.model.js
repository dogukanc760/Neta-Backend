const mongoose = require("mongoose");

let ItemSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true },
    productName: { type: String, required: true},
    productImage: { type: String, required: true},
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

const CardSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    items:[ItemSchema],
    subTotal: { type: Number, default:0},
    cargoNum:{type:String, default:''},
    status:{type:String, default:'onaylanacak'},
    isActive: { type:Boolean, default:true},
    isFinished: { type:Boolean, default:false},
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
