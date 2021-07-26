import express from "express";
import { endpointConstants } from "./constants";
import {
    mockAggregateTimeline,
    mockMessage1,
    mockTimelineUser1,
    mockUpdatedFollows,
  } from "./__mocks__";

const { timeline, message, follow, publish } = endpointConstants;
const server = express();

server.get("/", (req, res) => { res.send(mockAggregateTimeline); });
server.get(`/${timeline}`, (req, res) => { res.send(mockAggregateTimeline); });
server.get(`/${timeline}/:id`, (req, res) => { res.send(mockTimelineUser1); });
server.get(`/${message}/:id`, (req, res) => { res.send(mockMessage1); });
server.post(`/${follow}`, (req, res) => { res.send(mockUpdatedFollows); });
server.post(`/${publish}`, (req, res) => { res.send(true); });

export default server;
