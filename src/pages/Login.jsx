import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../theme/michiTheme.css";

export default function Login() {

  const navigate = useNavigate();

  const [mode, setMode] = useState("login");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);


  function submit() {

    if (!email || !password) {

      alert("Please enter email and password");

      return;

    }


    localStorage.setItem(
      "michi_user",
      email
    );


    navigate("/");

  }


  return (

    <div className="page michi-login">


      <img
        src="/src/assets/michi-logo.png"
        alt="MICHI AI"
        className="michi-logo"
      />


      <h1 className="michi-title">
        MICHI AI
      </h1>


      <p className="subtitle">
        Your Intelligent Assistant
      </p>



      <div className="login-box">


        <h2>
          {mode === "login"
            ? "SIGN IN"
            : "CREATE ACCOUNT"}
        </h2>



        <input

          className="chat-input"

          placeholder="Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

        />



        <div className="password-box">

  <input

    className="chat-input"

    type={showPassword ? "text" : "password"}

    placeholder="Password"

    value={password}

    onChange={(e)=>setPassword(e.target.value)}

  />

  <button

    type="button"

    className="show-password"

    onClick={() => setShowPassword(!showPassword)}

  >

    {showPassword ? "Hide" : "Show"}

  </button>

</div>


        <button
          className="michi-button"
          onClick={submit}
        >

          {mode === "login"
            ? "SIGN IN"
            : "CREATE ACCOUNT"}

        </button>



        <p
          className="subtitle"
          onClick={() =>
            setMode(
              mode === "login"
              ? "create"
              : "login"
            )
          }
          style={{cursor:"pointer"}}
        >

          {mode === "login"
          ? "Create Account"
          : "Already have an account? Sign In"}

        </p>


      </div>


    </div>

  );

}
