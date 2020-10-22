import React from "react";
import "./Home.css";
import Header from "../components/Header";
import SearchIcon from '@material-ui/icons/Search';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="search__bar">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
          <div className="input__box">
              <
              <input type="text" placeholder=""/>
          </div>
      </div>
    </div>
  );
};

export default Home;
