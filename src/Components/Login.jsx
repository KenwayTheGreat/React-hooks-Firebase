import React from "react";

function Login(props) {
  const [
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  ] = props;
  return (
    <section className="login">
      <div className="loginContainer">
        <label>UserName</label>
        <input
          type="text"
          outOfFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error-message">{emailError}</p>

        <label>Password</label>
        <input
          type="text"
          outOfFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error-message">{emailError}</p>
      </div>
    </section>
  );
}

export default Login;
