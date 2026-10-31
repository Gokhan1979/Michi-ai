import "./theme/michiTheme.css";

function App() {
  return (
    <div className="app">

      <div className="logo-area">
        <h1 className="michi-title">
          MICHI
        </h1>

        <div className="gold-line"></div>

        <p className="subtitle">
          Your Intelligent Assistant
        </p>
      </div>


      <div className="menu">

        <button className="michi-button">
          💬 Chat
        </button>

        <button className="michi-button">
          📄 Documents
        </button>

        <button className="michi-button">
          🖼 Image AI
        </button>

        <button className="michi-button">
          💡 Project Creator
        </button>

        <button className="michi-button">
          🎤 Voice Assistant
        </button>

      </div>

    </div>
  );
}

export default App;
