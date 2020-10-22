import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__searchBar">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
          <Search/>
      </div>
    </div>
  );
};

export default Home;
