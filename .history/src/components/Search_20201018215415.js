import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

const Search = () => {
    return (
        <div className="search">
            <div className="home__inputSearch">
              <SearchIcon className="search__icon"/>
              <input type="text" placeholder=""/>
              <MicIcon/>
          </div>
        </div>
    )
}

export default Search
