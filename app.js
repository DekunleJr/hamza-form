const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const app = express();
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Serve the HTML View
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

const Service = require("./model/service");
const Diagnostics = require("./model/diagnostics");
const Feedback = require("./model/feedback");
const PartsInventory = require("./model/PartsInventory");

// Routes for Handling Form Submissions
app.post("/submit-service", async (req, res) => {
  try {
    await new Service(req.body).save();
    res.redirect("/"); // Redirect to the home page after submission
  } catch (error) {
    res.status(500).send("Error saving service data");
  }
});

app.post("/submit-diagnostics", async (req, res) => {
  try {
    await new Diagnostics(req.body).save();
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Error saving diagnostics data");
  }
});

app.post("/submit-feedback", async (req, res) => {
  try {
    await new Feedback(req.body).save();
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Error saving feedback");
  }
});

app.post("/submit-parts-inventory", async (req, res) => {
  try {
    await new PartsInventory(req.body).save();
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Error saving parts inventory");
  }
});

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(PORT);
    console.log(`Server running on http://localhost:${PORT}`);
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
    console.log("Error Stack:", err.stack);
  });
