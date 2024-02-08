const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Welcome to EcommerceAPI", status: true });
});

const authRouters = require("./routes/auth.route.js");
app.use("/auth", authRouters);

const userRouters = require("./routes/user.route.js");
app.use("/api/users", userRouters);

const productRouter = require("./routes/product.route");
app.use("/api/products", productRouter);

const adminProductRouter = require("./routes/adminProduct.route");
app.use("/api/admin/products", adminProductRouter);

const cartRouter = require("./routes/cart.route");
app.use("/api/cart", cartRouter);

const cartItemRouter = require("./routes/cartItem.route");
app.use("/api/cart_items", cartItemRouter);

const orderRouter = require("./routes/order.route.js");
app.use("/api/orders", orderRouter);

const adminOrderRouter = require("./routes/adminOrder.route");
app.use("/api/admin/orders", adminOrderRouter);

const reviewRouter = require("./routes/review.route");
app.use("/api/reviews", reviewRouter);

const ratingReview = require("./routes/rating.route");
app.use("/api/ratings", ratingReview);

module.exports = app;
