import React from "react";
import Header from "../components/layouts/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-content">
        <div className="home-text">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-explore">
          <button className="home-explore-btn btnTest">EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
