import React from 'react'
import SearchBar from './SearchBar'
import SearchSuggestions from './SearchSuggestions'
import { GPT_SEARCH_URL } from '../utils/url'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {

    return (
        <div className=' '>
            <div className="absolute w-full h-screen z-0">
                <img className="w-full h-full object-cover bg-center opacity-90" src={GPT_SEARCH_URL}/>
            </div>
            <div>

            </div>
            <SearchBar/>
            <SearchSuggestions/>
        </div>
    )
}

export default GPTSearchBar