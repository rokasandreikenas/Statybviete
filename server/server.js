const express = require("express");
const dotenv = require("dotenv");
const Job = require("./models/Job");
const connectDB = require("./config/db");

// Load config
dotenv.config({ path: "./config/config.env" });

// Connect database
connectDB();

const app = express();

// @desc Show all jobs
// @route GET /jobs
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find({});

    if (jobs.length === 0) console.log("No jobs exists");

    res.json(jobs);
  } catch (error) {
    console.error(error);
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is runnin on port ${PORT}`));
