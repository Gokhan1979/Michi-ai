import { Routes, Route, Link } from "react-router-dom";

import Chat from "./pages/Chat.jsx";
import Documents from "./pages/Documents.jsx";
import ImageAI from "./pages/ImageAI.jsx";
import ProjectCreator from "./pages/ProjectCreator.jsx";
import VoiceAssistant from "./pages/VoiceAssistant.jsx";

import "./theme/michiTheme.css";

function Home() {
  return (
    <div className="app">

      <div className="logo-area">

        <img
          src="/src/assets/michi-logo.png"
          alt="MICHI Logo"
          className="michi-logo"
        />

        <div className="gold-line"></div>

        <p className="subtitle">
          Your Intelligent Assistant
        </p>

      </div>


      <div className="menu">

        <Link to="/chat">
          <button className="michi-button">
            💬 Chat
          </button>
        </Link>


        <Link to="/documents">
          <button className="michi-button">
            📄 Documents
          </button>
        </Link>


        <Link to="/image">
          <button className="michi-button">
            🖼 Image AI
          </button>
        </Link>


        <Link to="/projects">
          <button className="michi-button">
            💡 Project Creator
          </button>
        </Link>


        <Link to="/voice">
          <button className="michi-button">
            🎤 Voice Assistant
          </button>
        </Link>

      </div>

    </div>
  );
}


function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/chat" element={<Chat />} />

      <Route path="/documents" element={<Documents />} />

      <Route path="/image" element={<ImageAI />} />

      <Route path="/projects" element={<ProjectCreator />} />

      <Route path="/voice" element={<VoiceAssistant />} />

    </Routes>

  );

}


export default App;
