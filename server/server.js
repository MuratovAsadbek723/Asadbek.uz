const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let orders = [];

// Buyurtma yuborish
app.post("/order", (req, res) => {
  const order = {
    id: orders.length + 1,
    ...req.body,
  };

  orders.push(order);

  res.json({
    success: true,
    order,
  });
});

// Buyurtmalarni olish
app.get("/orders", (req, res) => {
  res.json(orders);
});

// Buyurtmalarni tozalash
app.delete("/orders", (req, res) => {
  orders = [];
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("Server 3000-portda ishlayapti");
});