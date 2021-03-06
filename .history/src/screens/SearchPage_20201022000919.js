import React from "react";
import "./SearchPage.css";
import { useSelector } from "react-redux";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../responseJSON";
import { Link } from "react-router-dom";
import Search from '../components/Search'

const SearchPage = () => {
  const term = useSelector((store) => store.term);
  //LIVE API Call
  // const {data} = useGoogleSearch(term)
  const data = Response;
  console.log(data);
  return (
    <div className="searchPage">
      {/* <h1>{term}</h1> */}
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
            <Search hideButtons/>
            <div className="searchPage__options">
                <div className="searchPage__optionsLeft">
                    <div className="searchPage__option">
                        <Searc
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
};

export default SearchPage;
