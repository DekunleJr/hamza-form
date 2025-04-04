const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PartsInventorySchema = new Schema({
  part_id: String,
  part_name: String,
  quantity: Number,
  supplier_id: String,
  unit_cost: Number,
  reorder_level: Number,
  last_restocked: Date,
});

module.exports = mongoose.model("PartsInventory", PartsInventorySchema);
