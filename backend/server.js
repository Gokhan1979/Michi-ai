import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("MICHI AI Backend Active 🖤🥇");
});


app.post("/ask-michi", async (req, res) => {
console.log("MICHI REQUEST:", req.body);
  
  const userMessage = req.body.message;


  try {

    const { askAI } = await import("./aiService.js");

const reply = await askAI(userMessage);

    res.json({
      reply: reply
    });


  } catch (error) {

    res.status(500).json({
      error: "MICHI AI error"
    });

  }

});


app.listen(3001, () => {

  console.log(
    "MICHI AI Server running on port 3001"
  );

});
