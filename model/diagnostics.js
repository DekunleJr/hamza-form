const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DiagnosticsSchema = new Schema({
  vehicle_id: String,
  mileage: Number,
  engine_health: Number,
  battery_health: Number,
  brake_health: Number,
  sensor_data: String,
  vehicle_age: Number,
  last_serviced: Date,
});

module.exports = mongoose.model("Diagnostics", DiagnosticsSchema);
