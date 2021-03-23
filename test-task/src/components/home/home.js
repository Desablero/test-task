import React from "react";
import "./home.css";

function Home() {
  const welcomeText = "Welcome, <username>!";
  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="text">
          <h1></h1>
        </div>
        <div className="wrapper-image"></div>
      </div>
    </div>
  );
}

export default Home;
