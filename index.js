import server from "./src/server.js";
import { conn } from "./src/database/conn.js";
import { loader } from "./src/scripts/seed.js";
const { PORT } = process.env;

conn
  .sync({
    logging: false,
    force: true,
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening in port: ${PORT}`);
    });
    console.log("Database connected");
    loader();
  })
  .catch((err) => {});
