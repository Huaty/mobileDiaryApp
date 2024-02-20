const db = require("./config/database");
const usersRoutes = require("./routes/users");

// Import the necessary libraries
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

// Create an instance of express app
const app = express();

// Use JSON middleware to automatically parse JSON
app.use(express.json());

// Configure CORS
app.use(cors());

// Connect to the database

// Define a simple route for testing
app.get("/", (req, res) => {
  res.send("Server Working");
});

try {
  app.use("/users", usersRoutes);
  console.log("Working");
} catch (error) {
  console.error(error);
  res.status(500).json({ message: "An error occurred." });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// It is always server -> routes -> controller -> models
