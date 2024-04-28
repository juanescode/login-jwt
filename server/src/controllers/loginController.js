const connection = require("../models/db");
const jwt = require('jsonwebtoken')

module.exports.login = (req, res) => {
  const { username, password } = req.body;
  const consult = "SELECT * FROM login WHERE username = ? AND password = ?";

  try {
    connection.query(consult, [username, password], (err, result) => {
      if (err) {
        console.error("Error al realizar la consulta:", err);
        res.status(500).send("Error interno del servidor");
        return;
      }

      if (result.length > 0) {
        const token = jwt.sign({ username }, "Stack", {
          expiresIn: '3m'
        });
        res.send({ token });
      } else {
        console.log("No existe el usuario");
        res.send({ message: "No existe el usuario" });
      }
    });
  } catch (e) {
    console.error("Error inesperado:", e);
    res.status(500).send("Error interno del servidor");
  }
};
