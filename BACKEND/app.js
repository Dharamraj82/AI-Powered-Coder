const express = require("express");
const cors = require("cors");
const aiRoutes = require("./src/routes/ai.routes");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("👋 Hello Dharamraj! API is working fine.");
});

app.use("/ai", aiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
