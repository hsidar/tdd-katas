import jest from "jest-mock";
import request from "supertest";
import server from "./server.js";
import { endpointConstants } from "./constants";
import mockTimeline from "./__mocks__/mockTimeline.js";
import mockMessage1 from "./__mocks__/mockMessage1.js";
import mockTimeline1 from "./__mocks__/mockTimeline1.js";

const {
  timelineEndpoint,
  messageEndpoint,
  followEndpoint,
  publishEndpoint,
} = endpointConstants;

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
      expect(response.body).toEqual(mockTimeline);
    });
  });
});

describe("GET /timeline", () => {
  describe("given a valid user", () => {
    test("should return 200 status", async () => {
      const response = await request(server).get(`/${timelineEndpoint}`);
      expect(response.statusCode).toEqual(200);
    });
    test("should return a json object of that users aggregated timeline", async () => {
      const response = await request(server).get(`/${timelineEndpoint}`);
      expect(response.body).toEqual(mockTimeline);
    });
  });
});

describe("GET /timeline/<id>", () => {
  describe("given a user id", () => {
    test("should return 200 status", async () => {
      const response = await request(server).get(`/${timelineEndpoint}/1`);
      expect(response.statusCode).toEqual(200);
    });
    test("should return the timeline of the user id specified", async () => {
      const response = await request(server).get(`/${timelineEndpoint}/1`);
      expect(response.body).toEqual(mockTimeline1);
    });
  });
});

describe("GET /message/<id>", () => {
  describe("given a message id", () => {
    test("should return 200 status", async () => {
      const response = await request(server).get(`/${messageEndpoint}/1`);
      expect(response.statusCode).toEqual(200);
    });
    test("should return the message with the id specified", async () => {
      const response = await request(server).get(`/${messageEndpoint}/1`);
      expect(response.body).toEqual(mockMessage1);
    });
  });
});

describe("POST /follow", () => {
  describe("given a user id to follow", () => {
    test("should return 200 status", async () => {
      const response = await request(server)
        .post(`/${followEndpoint}`)
        .send({ id: 1 });
      expect(response.statusCode).toEqual(200);
    });
    test("should respond with an updated array of followed users", async () => {
      const response = await request(server)
        .post(`/${followEndpoint}`)
        .query({ id: 1 });
      expect(response.body).toEqual([1, 2, 3]);
    });
  });
});

describe("POST /publish", () => {
  describe("given a message", () => {
    test("should return 200 status", async () => {
      const response = await request(server)
        .post(`/${publishEndpoint}`)
        .query({ message: "test" });
      expect(response.statusCode).toEqual(200);
    });
    test("should respond with json results with a boolean", async () => {
      const response = await request(server)
        .post(`/${publishEndpoint}`)
        .query({ message: "test" });
      expect(response.body).toEqual(true);
    });
  });
});
