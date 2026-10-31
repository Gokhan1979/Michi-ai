import dotenv from "dotenv";

dotenv.config();


export async function askAI(message) {

  // Gerçek AI bağlantısı buraya gelecek

  return `
MICHI AI:

Mesajını aldım:
"${message}"

AI motoru bağlantıya hazırlanıyor.
  `;

}
