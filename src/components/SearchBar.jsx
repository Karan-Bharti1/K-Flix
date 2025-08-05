import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
const SearchBar = () => {
        const language=useSelector((state)=>state?.lang?.language)
  return (
    <div className='absolute pt-24 flex justify-center z-10'>
        <form className='w-screen ml-18'>
            <input type="text" className='w-[50%] p-4 m-4 border bg-gray-300 border-gray-400 rounded-lg' placeholder={lang[language]?.placeholderText}/>
            <button className='py-5 px-4 bg-red-500 text-white rounded-lg'><FaSearch/></button>
        </form>
    </div>
  )
}

export default SearchBar