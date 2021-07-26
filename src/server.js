import express from "express";
import { endpointConstants } from "./constants";

const { timeline, message, follow, publish } = endpointConstants;
const server = express();

// server.get("/", (req, res) => {});
// server.get(`/${}`, () => {});
// server.get(`/${timeline}/:id`, () => {});
// server.get(`/${message}/:id`, () => {});
// server.post(`/${follow}`, () => {});
// server.post(`/${publish}`, () => {});

export default server;
