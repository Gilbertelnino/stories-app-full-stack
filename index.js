const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("working");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`app listning on port ${PORT}`));
