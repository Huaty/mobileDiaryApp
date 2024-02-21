const usersRoutes = require("./routes/users");

// Import the necessary libraries
const express = require("express");
const cors = require("cors");

const http = require("http");
const { Server } = require("socket.io");

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

const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 8080;
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  // Example: Listen for chat messages
  socket.on("chat message", ({ username, message }) => {
    io.emit("chat message", { username, message });
    console.log("message: " + message);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// It is always server -> routes -> controller -> models
