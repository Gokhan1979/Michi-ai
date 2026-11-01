import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();


const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


export async function askAI(message) {

  const response = await client.chat.completions.create({

    model: "gpt-4o-mini",

    messages: [
      {
        role: "system",
        content:
          "You are MICHI AI, a helpful intelligent assistant. Answer clearly and professionally."
      },
      {
        role: "user",
        content: message
      }
    ]

  });


  return response.choices[0].message.content;

}
