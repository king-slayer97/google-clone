import React from 'react'
import './SearchPage.css'
import {useSelector} from 'react-redux'
import useGoogleSearch from '../useGoogleSearch'

const SearchPage = () => {
    const store = useSelector((store) => store)
    return (
        <div className="searchPage">
            <h1>{store.term}</h1>
            <div className="searchPage__header">

            </div>

            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
