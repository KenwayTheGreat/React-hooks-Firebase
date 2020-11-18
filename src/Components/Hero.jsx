import React from "react";

function Hero(props) {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={props.handleLogout}>Logout</button>
      </nav>
    </section>
  );
}

export default Hero;
