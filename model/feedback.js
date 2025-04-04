const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  customer_id: String,
  vehicle_id: String,
  service_id: String,
  rating: Number,
  feedback: String,
  satisfaction_score: Number,
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
