const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 5001;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Ali@1234",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});

app.get("/", (req, res) => {
  pool.query("SELECT * FROM products", (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results);
    }
  });
});

const server = app.listen(PORT, () => {
  console.log("App is running on the port - 5001");
});
