const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "project_jwt",
});

try {
  connection.connect()
  console.log('La conexion a la base de datos funciono')
} catch (error) {
  console.log('Error al conectarse a la base de datos:', error)
}

connection.on('error', function(error){
  console.log(error)
})

module.exports = connection;
