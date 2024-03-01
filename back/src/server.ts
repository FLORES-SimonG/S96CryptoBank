import express from "express";
import router from "./routes/homeRouter";
import cors from "cors";
import morgan from "morgan";

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use(router);

export default server;
