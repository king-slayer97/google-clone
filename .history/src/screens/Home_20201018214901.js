import React from "react";
import "./Home.css";
import Header from "../components/Header";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__searchBar">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
          <div className="home__inputSearch">
              <SearchIcon className="homsearchIcon"/>
              <input type="text" placeholder=""/>
              <MicIcon/>
          </div>
      </div>
    </div>
  );
};

export default Home;
