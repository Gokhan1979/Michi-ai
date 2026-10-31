import "../theme/michiTheme.css";

function VoiceAssistant() {
  return (
    <div className="app">

      <h1 className="michi-title">
        MICHI VOICE
      </h1>

      <div className="chat-box">
        🎤 Sesli asistan merkezi
        <br /><br />

        Yakında:
        <br />
        • Sesli komut
        <br />
        • Sesli cevap
        <br />
        • Özel MICHI sesi
        <br />
        • Gerçek zamanlı konuşma
      </div>

      <button className="michi-button">
        Start Listening
      </button>

    </div>
  );
}

export default VoiceAssistant;
