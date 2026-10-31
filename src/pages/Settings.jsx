import { useState } from "react";
import "../theme/michiTheme.css";

function Settings() {

  const [name, setName] = useState(
    localStorage.getItem("michi_name") || ""
  );


  function saveName() {

    localStorage.setItem(
      "michi_name",
      name
    );

    alert("MICHI ayarları kaydedildi 🖤🥇");

  }


  return (

    <div className="app">

      <h1 className="michi-title">
        MICHI SETTINGS
      </h1>


      <div className="chat-box">

        Kullanıcı adı:

        <input

          className="chat-input"

          value={name}

          onChange={(e)=>setName(e.target.value)}

          placeholder="İsmin"

        />


        <button

          className="michi-button"

          onClick={saveName}

        >

          Kaydet

        </button>


      </div>


    </div>

  );

}


export default Settings;
