import "../theme/michiTheme.css";

function FileUploader() {

  function handleFile(event) {

    const file = event.target.files[0];

    if (file) {
      alert(
        "MICHI dosyanı aldı: " + file.name
      );
    }

  }


  return (
    <div>

      <input
        type="file"
        onChange={handleFile}
      />

    </div>
  );

}

export default FileUploader;
