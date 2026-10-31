import "../theme/michiTheme.css";

function Documents() {
  return (
    <div className="app">

      <h1 className="michi-title">
        MICHI DOCUMENTS
      </h1>

      <div className="chat-box">
        📄 PDF ve belgeler burada yönetilecek.
        <br /><br />
        Yakında:
        <br />
        • PDF okuma
        <br />
        • Özetleme
        <br />
        • Düzenleme
        <br />
        • Word dönüşümü
      </div>

      <button className="michi-button">
        Upload Document
      </button>

    </div>
  );
}

export default Documents;
