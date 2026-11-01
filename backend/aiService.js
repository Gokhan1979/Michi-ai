import dotenv from "dotenv";
import OpenAI from "openai";

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
        content: `
Sen MICHI AI'sin.

Siyah-altın premium yapay zeka asistanısın.
Türkçe konuş.
Samimi ve profesyonel ol.
Kullanıcıya yardımcı ol.
`
      },

      {
        role: "user",
        content: message
      }
    ]

  });


  return response.choices[0].message.content;

}
