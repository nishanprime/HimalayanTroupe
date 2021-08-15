const express = require("express");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const todoListRoutes = require("./routes/todoListRouter");
const userRoutes = require("./routes/userRoute");
const app = express();
app.use(express.json());
connectDB();

app.use("/todos", todoListRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);
app.listen(5000, () => {
  console.log("Server Up and Running");
});
