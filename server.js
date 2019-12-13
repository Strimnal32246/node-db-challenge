const express = require("express");
const helmet = require("helmet");

const ApiRouter = require("./api/api-router.js");

const server = express();
server.use(helmet());
server.use(express.json());
server.use("/api/api", ApiRouter);

module.exports = server;
