const express = require("express");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("MICHI AI Backend Active 🖤🥇");
});


app.listen(3001, () => {
  console.log("MICHI AI Server running on port 3001");
});
