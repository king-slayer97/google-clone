import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './Sea'

const Search = () => {
    return (
        <div className="search">
            <div className="search__input">
              <SearchIcon className="search__inputIcon"/>
              <input type="text" placeholder=""/>
              <MicIcon/>
          </div>
        </div>
    )
}

export default Search
