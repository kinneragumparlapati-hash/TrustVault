const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/status", (req, res) => {
  res.json({
    project: "TrustVault",
    status: "running"
  });
});

app.listen(PORT, () => {
  console.log(`TrustVault running at http://localhost:${PORT}`);
})