const db = require("../config/db");

// Get all orders
exports.getOrders = (req, res) => {
  const sql = "SELECT * FROM orders ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

// Create Order
exports.createOrder = (req, res) => {

  const {
    customerName,
    address,
    items
  } = req.body;

  const sql = `
    INSERT INTO orders
    (customer_name,address,items)
    VALUES (?,?,?)
  `;

  db.query(
    sql,
    [
      customerName,
      address,
      JSON.stringify(items)
    ],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Order Created Successfully",
        orderId: result.insertId
      });

    }
  );
};