import React, { useState, useEffect } from "react";
import fire from "./fire";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAcc, setHasAcc] = useState(false);

  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {console.log(err)});
  };
  return (
    <div className="App">
      <h1>Hell O' World</h1>
    </div>
  );
}

export default App;
