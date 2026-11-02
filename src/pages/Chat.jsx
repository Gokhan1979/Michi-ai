import { useState, useRef, useEffect } from "react";
import "../theme/michiTheme.css";

const MICHI_API =
  "https://potential-guacamole-r4xqq9g6rqjpcx4pg-3001.app.github.dev/ask-michi";


export default function Chat() {

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      role: "michi",
      text: "Merhaba 👋 Ben MICHI AI. Sana nasıl yardımcı olabilirim?"
    }
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);


  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [chat, loading]);


  async function sendMessage() {

    if (!message.trim()) return;


    const userText = message;


    setChat(prev => [
      ...prev,
      {
        role: "user",
        text: userText
      }
    ]);


    setMessage("");
    setLoading(true);


    try {

      const response = await fetch(
        MICHI_API,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: userText
          })
        }
      );


      const data = await response.json();


      setChat(prev => [
        ...prev,
        {
          role: "michi",
          text:
            data.reply ||
            "MICHI cevap alamadı."
        }
      ]);


    } catch (error) {

      setChat(prev => [
        ...prev,
        {
          role: "michi",
          text:
            "Bağlantı hatası. Backend kontrol edilmeli."
        }
      ]);

    }


    setLoading(false);

  }


  function handleKey(e) {

    if (e.key === "Enter") {
      sendMessage();
    }

  }


  return (

    <div className="app">

      <h1 className="michi-title">
        MICHI CHAT
      </h1>


      <div className="chat-box">

        {chat.map((item,index)=>(

          <div key={index}>

            <p>

              <b>
                {item.role === "michi"
                ? "🐾 MICHI"
                : "👤 Sen"}
              </b>

              <br />

              {item.text}

            </p>

          </div>

        ))}


        {loading && (

          <p>
            🐾 MICHI düşünüyor...
          </p>

        )}


        <div ref={bottomRef}></div>

      </div>


      <input

        className="chat-input"

        value={message}

        onChange={(e)=>setMessage(e.target.value)}

        onKeyDown={handleKey}

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
