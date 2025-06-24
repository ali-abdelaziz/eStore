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
  pool.getConnection((err, connection) => {
    if (err) {
      res.status(500).send(err);
    } else {
      connection.query("SELECT * FROM product", (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).json(results);
        }
        connection.release();
      });
    }
  });
});

const server = app.listen(PORT, () => {
  console.log("App is running on the port - 5001");
});
