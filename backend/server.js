import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
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

    console.log("MICHI ERROR:", error);

    res.status(500).json({
      error: error.message
    });

}
});


app.listen(3001, () => {

  console.log(
    "MICHI AI Server running on port 3001"
  );

});
