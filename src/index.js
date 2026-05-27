const express = require("express");
const { add, multiply, divide, greet } = require("./utils");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET /
app.get("/", (req, res) => {
  res.json({ message: greet("World"), status: "ok" });
});

// GET /math?a=5&b=3&op=add
app.get("/math", (req, res) => {
  const { a, b, op } = req.query;
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  let result;
  if (op === "multiply") {
    result = multiply(numA, numB);
  } else if (op === "divide") {
    result = divide(numA, numB);
  } else {
    result = add(numA, numB);
  }

  res.json({ a: numA, b: numB, op: op || "add", result });
});

// Only start server if run directly (not during tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
