import request from "supertest";
import server from "./server.js";
import { endpointConstants } from "./constants";
import {
  mockAggregateTimeline,
  mockMessage1,
  mockTimelineUser1,
  mockUpdatedFollows,
} from "./__mocks__";

const { timeline, message, follow, publish } = endpointConstants;

describe("Test Suite Canary", () => {
  test("true should be true", () => {
    expect(true).toEqual(true);
  });
});

describe("GET /", () => {
  describe("given a valid user", () => {
    test("should return 200 status", async () => {
      const response = await request(server).get("/");
      expect(response.statusCode).toEqual(200);
    });
    test("should return a json object of that users aggregated timeline", async () => {
      const response = await request(server).get("/");
      expect(response.body).toEqual(mockAggregateTimeline);
    });
  });
});
describe("GET /timeline", () => {
  describe("given a valid user", () => {
    test("should return 200 status", async () => {
      const response = await request(server).get(`/${timeline}`);
      expect(response.statusCode).toEqual(200);
    });
    test("should return a json object of that users aggregated timeline", async () => {
      const response = await request(server).get(`/${timeline}`);
      expect(response.body).toEqual(mockAggregateTimeline);
    });
  });
});
describe("GET /timeline/<id>", () => {
  describe("given a user id", () => {
    test("should return 200 status", async () => {
      const response = await request(server).get(`/${timeline}/1`);
      expect(response.statusCode).toEqual(200);
    });
    test("should return the timeline of the user id specified", async () => {
      const response = await request(server).get(`/${timeline}/1`);
      expect(response.body).toEqual(mockTimelineUser1);
    });
  });
});
describe("GET /message/<id>", () => {
  describe("given a message id", () => {
    test("should return 200 status", async () => {
      const response = await request(server).get(`/${message}/1`);
      expect(response.statusCode).toEqual(200);
    });
    test("should return the message with the id specified", async () => {
      const response = await request(server).get(`/${message}/1`);
      expect(response.body).toEqual(mockMessage1);
    });
  });
});
describe("POST /follow", () => {
  describe("given a user id to follow", () => {
    test("should return 200 status", async () => {
      const response = await request(server).post(`/${follow}`).send({ id: 1 });
      expect(response.statusCode).toEqual(200);
    });
    test("should respond with an updated array of followed users", async () => {
      const response = await request(server).post(`/${follow}`).send({ id: 1 });
      expect(response.body).toEqual(mockUpdatedFollows);
    });
  });
});
describe("POST /publish", () => {
  describe("given a message", () => {
    test("should return 200 status", async () => {
      const response = await request(server)
        .post(`/${publish}`)
        .send({ id: 1 });
      expect(response.statusCode).toEqual(200);
    });
    test("should respond with json results with a boolean", async () => {
      const response = await request(server)
        .post(`/${publish}`)
        .send({ id: 1 });
      expect(response.body).toEqual(true);
    });
  });
});
