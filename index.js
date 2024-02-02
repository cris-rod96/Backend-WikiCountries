import server from "./src/server.js";
import database from "./src/database/conn.js";
const { conn } = database;
const { PORT } = process.env;

conn
  .sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening in port: ${PORT}`);
    });
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(`Error en la conexion: ${err}`);
  });
