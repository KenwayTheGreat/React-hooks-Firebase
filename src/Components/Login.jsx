import React from "react";

function Login(props) {
  /*const [
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
  ] = props;*/
  return (
    <section className="login">
      <div className="loginContainer">
        <label>UserName</label>
        <input
          type="text"
          required
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
        />
        <p className="errorMsg">{props.emailError}</p>

        <label>Password</label>
        <input
          type="password"
          required
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
        />
        <p className="errorMsg">{props.passwordError}</p>
        <div className="btnContainer">
          {props.hasAccount ? (
            <React.Fragment>
              <button onClick={props.handleLogin}>Sign In</button>
              <p>
                Don't have an account?{" "}
                <span onClick={() => props.setHasAccount(!props.hasAccount)}>
                  Sign Up
                </span>
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <button onClick={props.handleSignUp}>Sign Up</button>
              <p>
                Have an account?{" "}
                <span onClick={() => props.setHasAccount(!props.hasAccount)}>
                  Sign In
                </span>
              </p>
            </React.Fragment>
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;
