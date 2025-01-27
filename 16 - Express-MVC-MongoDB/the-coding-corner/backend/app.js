require("dotenv").config();

const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for cross-origin requests

// Routes
app.use("/posts", require("./src/routes/post"));
app.use("/users", require("./src/routes/user"));

// Connect to the MongoDB Cluster
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.info(
        `Listening on port ${process.env.PORT} and connected to MongoDB Atlas.`
      );
    });
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  });
