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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishlayapti`);
});
