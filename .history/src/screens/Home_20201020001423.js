import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Search from "../components/Search";
import {useSelector} from "react-redux"

const Home = () => {
  const store = useSelector((store) =>)
  return (
    <div className="home">
      <Header />
      <div className="home__searchBar">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
