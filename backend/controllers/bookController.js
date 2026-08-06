const db = require("../config/db");

// Get all books
exports.getBooks = (req, res) => {
  const sql = "SELECT * FROM books";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

// Get book by ID
exports.getBookById = (req, res) => {
  const sql = "SELECT * FROM books WHERE id = ?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    res.json(result[0]);
  });
};