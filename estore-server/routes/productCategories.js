const express = require("express");
const pool = require("../shared/pool");
const productCategories = express.Router();

// get all product categories
productCategories.get("/", (req, res) => {
  pool.query("select * from categories", (error, categories) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(categories);
  });
});

module.exports = productCategories;
