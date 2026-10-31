import "../theme/michiTheme.css";
import FileUploader from "../components/FileUploader.jsx";

function ImageAI() {
  return (
    <div className="app">

      <h1 className="michi-title">
        MICHI IMAGE AI
      </h1>

      <div className="chat-box">
        🖼️ Yapay zeka görsel merkezi
        <br /><br />
        Yakında:
        <br />
        • Background değiştirme
        <br />
        • Fotoğraf düzenleme
        <br />
        • Görsel oluşturma
        <br />
        • Ürün fotoğrafı hazırlama
      </div>

      <button className="michi-button">
        Upload Image
      </button>

      <FileUploader />

    </div>
  );
}

export default ImageAI;
