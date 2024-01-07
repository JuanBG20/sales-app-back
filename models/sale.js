const mongoose = require("mongoose");

const saleSchema = mongoose.Schema({
  day: String,
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  uPrice: { type: Number, required: true },
});

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;
