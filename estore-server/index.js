const express = require("express");
const productCategories = require("./routes/productCategories");
const cors = require("cors");
const app = express();
const PORT = 5001;

app.use(cors()); // Enable CORS for all routes to avoid CORS issues

app.use("/productCategories", productCategories);

const server = app.listen(PORT, () => {
  console.log("App is running on the port - 5001");
});
