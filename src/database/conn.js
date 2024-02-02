import { Sequelize } from "sequelize";

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_SERVER, POSTGRES_DBNAME } =
  process.env;

const URI_DATABASE = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_SERVER}:5432/${POSTGRES_DBNAME}`;

const conn = new Sequelize(URI_DATABASE, { logging: false });

export default { conn, models: conn.models };
