import React from "react";
import logos from "../assets/images/5.svg";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="identity">
          <h1>
            <span>Rizal</span> is an Front-End Engineer
          </h1>
          <p>Web Developer in Designing and Developing User Interfaces</p>
        </div>
        <img className="banner" src={logos} alt="gambar" />
      </div>
      <footer>
        <div class="box a">
          <h3>Skills</h3>
        </div>
        <div class="box b">
          <h3>Catch me on the gram</h3>
          <ul>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">linkedin</a>
            </li>
          </ul>
        </div>
        <div class="box c">
          <h4>Language</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div class="box d">
          <h4>Framework</h4>
          <ul>
            <li>Redux</li>
          </ul>
        </div>
        <div class="box e">
          <h4>Library</h4>
          <ul>
            <li>React</li>
            <li>React Redux</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
