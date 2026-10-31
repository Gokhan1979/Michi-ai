const express = require("express");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("MICHI AI Backend Active 🖤🥇");
});

app.post("/ask-michi", async (req, res) => {

  const userMessage = req.body.message;


  const reply = `
MICHI AI:

Mesajını aldım:
"${userMessage}"

Gerçek AI bağlantısı hazırlanıyor.
  `;


  res.json({
    reply: reply
  });

});


app.listen(3001, () => {
  console.log("MICHI AI Server running on port 3001");
});
