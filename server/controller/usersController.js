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

exports.login = (req, res) => {
  const { email, password } = req.body; // Assume these are provided by the client

  // Basic validation (you should improve this with proper validation)
  if (!email || !password) {
    return res.status(400).json({ message: " email, and password" });
  }
  // Your SQL query to insert data
  const query = "SELECT email, pwd, id ,name FROM user WHERE email = ?";

  pool.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error Querying user:", err);
      return res.status(500).json({ message: "Error Querying user" });
    }
    // Check if any user was found
    if (results.length > 0) {
      // User found, now compare the provided password with the stored password
      if (password === results[0].pwd) {
        // Passwords match
        res.json({
          message: "Authentication successful",
          userId: results[0].id,
          userName: results[0].name,
        });
      } else {
        // Passwords don't match
        res.status(401).json({ message: "Authentication failed" });
      }
    } else {
      // No user found with that email
      res.status(404).json({ message: "User not found" });
    }
  });
};
