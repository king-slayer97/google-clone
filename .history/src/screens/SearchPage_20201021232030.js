import React from 'react'
import './SearchPage.css'
import {useSelector} from 'react-redux'
import useGoogleSearch from '../useGoogleSearch'
import Response from '../responseJSON'

const SearchPage = () => {
    const term = useSelector((store) => store.term)
    //LIVE API Call
    // const {data} = useGoogleSearch(term)
    const data = 
    console.log(data) 
    return (
        <div className="searchPage">
            <h1>{term}</h1>
            <div className="searchPage__header">

            </div>

            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
