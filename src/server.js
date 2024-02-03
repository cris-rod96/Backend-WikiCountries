import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import routes from "./routes/index.routes.js";
config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/api/v1", routes);

export default server;
