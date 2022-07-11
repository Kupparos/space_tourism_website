import { FC } from "react";
import "../styles/home.css";

const Home: FC = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home_block">
          <div className="home_info">
            <h2>SO, YOU WANT TO TRAVEL TO</h2>
            <h1>SPACE</h1>
            <p>
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <button className="home_explore" onClick={() => {window.location.href='/'}}>EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
