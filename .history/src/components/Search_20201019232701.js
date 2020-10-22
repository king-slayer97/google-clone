import React,{useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import {Button} from "@material-ui/core"
import "./Search.css";

const Search = () => {
    const [input,setInput] = useState('')

    const search = e => {
        e.preventDefault();

    }
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input type="text" placeholder="Search Google or type a URL" value={input} onChange={(e)=>setInput(e.target.va)} />
        <MicIcon />
      </div>
      <div className="search__buttons">
        <Button onClick={search} variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>

      </div>
    </div>
  );
};

export default Search;
