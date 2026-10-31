import "../theme/michiTheme.css";

function ProjectCreator() {
  return (
    <div className="app">

      <h1 className="michi-title">
        MICHI PROJECT CREATOR
      </h1>

      <div className="chat-box">
        💡 Proje üretici merkezi
        <br /><br />

        Yakında:
        <br />
        • İş fikirleri
        <br />
        • Uygulama planları
        <br />
        • Web sitesi projeleri
        <br />
        • Kod oluşturma
        <br />
        • Proje yönetimi
      </div>

      <button className="michi-button">
        Create Project
      </button>

    </div>
  );
}

export default ProjectCreator;
