const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
require("dotenv").config();

const app = express();
const upload = multer({ dest: "/tmp/" });

// CORS Configuration
const corsConfig = {
  origin: "*", // Allows all origins
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"], // Add any headers you expect
};

// Use CORS middleware globally before defining routes
app.use(cors(corsConfig));
app.options("*", cors(corsConfig)); // Preflight requests for all routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;

// Define routes after setting up middleware
const route = require("./gpt_route");
app.use(route);

app.listen(PORT, () => {
  console.log(`Listening on : ${PORT}`);
});
