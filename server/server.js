const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const Job = require("./models/Job");
const connectDB = require("./config/db");

// Load config
dotenv.config({ path: "./config/config.env" });

// Connect database
connectDB();

const app = express();

const addJob = async () => {
  try {
    const job = new Job({
      category: "electricity",
      title: "Nauji taskai",
      price: 12,
      unit: "vnt.",
    });

    job.save((err) => {
      if (err) return handleError(err);
      console.log("Saved");
      // saved
    });
  } catch (error) {
    console.err(erro);
  }
};

// addJob();

// @desc Show all jobs
// @route GET /jobs
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find({});
    console.log(jobs);
    if (jobs.length === 0) console.log("No jobs exists");
    res.json(jobs);
    // logger.log("info", "GET /rates called");
  } catch (error) {
    console.error(error);
    logger.log("error", error);
  }
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is runnin on port ${PORT}`));
