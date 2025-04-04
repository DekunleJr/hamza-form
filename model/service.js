const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  service_id: String,
  vehicle_id: String,
  service_date: Date,
  service_type: String,
  repair_time: Number,
  repair_cost: Number,
  failure_type: String,
  parts_used: String,
  technician_id: String,
  warranty_claim: Boolean,
  service_notes: String,
});

module.exports = mongoose.model("Service", ServiceSchema);
