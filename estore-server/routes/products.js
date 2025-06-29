const express = require("express");
const products = express.Router();
const pool = require("../shared/pool");

// get all products
products.get("/", (req, res) => {
  pool.query("select * from products", (error, products) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(products);
  });
});

// get product by id
products.get("/:id", (req, res) => {
  let id = req.params.id;
  pool.query("select * from products where id = ?", [id], (error, products) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(products);
  });
});

module.exports = products;
