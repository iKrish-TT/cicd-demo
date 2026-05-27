const request = require("supertest");
const app = require("../src/index");

describe("GET /", () => {
  test("returns greeting and status ok", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello, World!");
    expect(res.body.status).toBe("ok");
  });
});

describe("GET /math", () => {
  test("adds two numbers by default", async () => {
    const res = await request(app).get("/math?a=5&b=3");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });

  test("multiplies when op=multiply", async () => {
    const res = await request(app).get("/math?a=4&b=6&op=multiply");
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(24);
  });

  test("returns 400 for invalid numbers", async () => {
    const res = await request(app).get("/math?a=foo&b=3");
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Invalid numbers");
  });
});
