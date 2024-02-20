// controllers/usersController.js
const pool = require("../config/database");

exports.list = (req, res) => {
  pool.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ message: "Error fetching users" });
    }
    res.json(results);
  });
};

exports.create = (req, res) => {
  const { name, email, password } = req.body; // Assume these are provided by the client

  // Basic validation (you should improve this with proper validation)
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide name, email, and password" });
  }

  // Your SQL query to insert data
  const query = "INSERT INTO user (name, email, pwd) VALUES (?, ?, ?)";

  pool.query(query, [name, email, password], (err, results) => {
    if (err) {
      console.error("Error creating user:", err);
      return res.status(500).json({ message: "Error creating user" });
    }
    res
      .status(201)
      .json({ message: "User created successfully", userId: results.insertId });
  });
};
