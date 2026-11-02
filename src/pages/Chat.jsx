import { useState } from "react";
async function askMichi(message) {

  const response = await fetch(
    "https://potential-guacamole-r4xqq9g6rqjpcx4pg-3001.app.github.dev/ask-michi",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        message: message
      })

    }
  );


  const data = await response.json();

  return data.reply;

}
import "../theme/michiTheme.css";

function Chat() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      role: "michi",
      text: "Merhaba 👋 Ben MICHI AI. Sana nasıl yardımcı olabilirim?"
    }
  ]);


  async function sendMessage() {

    if (!message.trim()) return;


    const userMessage = {
      role: "user",
      text: message
    };


    setChat([...chat, userMessage]);


    const response = await askMichi(message);
    console.log(response);


    setChat(prev => [
      ...prev,
      {
        role: "michi",
        text: response
      }
    ]);


    setMessage("");

  }


  return (

    <div className="app">

      <h1 className="michi-title">
        MICHI CHAT
      </h1>


      <div className="chat-box">

        {chat.map((item,index)=>(

          <p key={index}>
            <b>
              {item.role === "michi"
              ? "🐾 MICHI:"
              : "👤 Sen:"}
            </b>

            <br />

            {item.text}

          </p>

        ))}

      </div>


      <input

        className="chat-input"

        value={message}

        onChange={(e)=>setMessage(e.target.value)}

        placeholder="MICHI'ye yaz..."

      />


      <button

        className="michi-button"

        onClick={sendMessage}

      >

        Gönder

      </button>


    </div>

  );

}


export default Chat;
