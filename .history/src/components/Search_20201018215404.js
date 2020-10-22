import React from 'react'

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
