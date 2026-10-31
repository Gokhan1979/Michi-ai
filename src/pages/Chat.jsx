import "../theme/michiTheme.css";

function Chat() {
  return (
    <div className="app">

      <h1 className="michi-title">
        MICHI CHAT
      </h1>

      <div className="chat-box">
        Merhaba 👋  
        Ben MICHI AI.
        Sana nasıl yardımcı olabilirim?
      </div>

      <input
        className="chat-input"
        placeholder="MICHI'ye yaz..."
      />

    </div>
  );
}

export default Chat;
