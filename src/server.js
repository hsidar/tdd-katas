import express from "express";
import { endpointConstants, errorMessageConstants } from "./constants";
import messageService from "./services/messageService/messageService";
import timelineService from "./services/timelineService";
import userService from "./services/userService";
import mockMessages from "./__mocks__/mockMessages";

// setup variables
const {
  timelineEndpoint,
  messageEndpoint,
  followEndpoint,
  publishEndpoint,
} = endpointConstants;
const {
  timelineError,
  messageError,
  followError,
  publishError,
} = endpointConstants;
const userId = 1; // realistically, we would get this detail from the session per request
const server = express();

// routes
server.get(["/", `/${timelineEndpoint}`], (req, res) => {
  try {
    const userTimeline = timelineService.getAggregate(userId);
    res.send(userTimeline);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: timelineError,
    });
  }
});

server.get(`/${timelineEndpoint}/:id`, (req, res) => {
  const id = +req.params.id;
  try {
    const userTimeline = timelineService.get(id);
    res.send(userTimeline);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: timelineError,
    });
  }
});

server.get(`/${messageEndpoint}/:id`, (req, res) => {
  const id = +req.params.id;
  try {
    const message = messageService.get(id, userId);
    res.send(message);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: messageError,
    });
  }
});

server.post(`/${followEndpoint}`, (req, res) => {
  try {
    const userIdToFollow = +req.query.id;
    const updatedFollows = userService.updateFollows(userId, userIdToFollow);
    res.send(updatedFollows);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: followError,
    });
  }
});

server.post(`/${publishEndpoint}`, (req, res) => {
  try {
    const message = req.query.message;
    messageService.insertMessage(userId, message);
    res.send(true);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: publishError,
    });
  }
});

export default server;
