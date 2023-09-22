import request from "supertest";

import app from "../../src/index";

describe("Test home route", () => {
  test("Hello world!", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "Hello World - Last updated: 22-09-2023!" });
  });
});
