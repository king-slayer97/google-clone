import React,{useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom"
import "./Search.css";

const Search = ({hideButtons = false}) => {
    const [input,setInput] = useState('')
    const history = useHistory()
    const search = e => {
        e.preventDefault();
        console.log(input)
        history.push('/search')
    }
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input type="text" placeholder="Search Google or type a URL" value={input} onChange={(e)=>setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons?(
          <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
  
        </div>
      ):
      (contentType)}
      
    </form>
  );
};

export default Search;
