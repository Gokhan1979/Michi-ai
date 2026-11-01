import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function login() {

    if (!email || !password) {

      alert("Please enter email and password");

      return;

    }

    localStorage.setItem("michi_user", email);

    navigate("/");

  }

  return (

    <div className="page">

      <h1>MICHI AI</h1>

      <input

        className="chat-input"

        placeholder="Email"

        value={email}

        onChange={(e)=>setEmail(e.target.value)}

      />

      <br/><br/>

      <input

        className="chat-input"

        type="password"

        placeholder="Password"

        value={password}

        onChange={(e)=>setPassword(e.target.value)}

      />

      <br/><br/>

      <button onClick={login}>

        LOGIN

      </button>

    </div>

  );

}
