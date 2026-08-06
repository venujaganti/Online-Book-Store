const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const bookRoutes = require("./routes/bookRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.json({
    message: "Online Book Store API Running..."
  });
});

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});