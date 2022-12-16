import React from 'react'
import {FaSearch} from 'react-icons/fa'

export default function Search({handleSearchBar}) {
  return (
    <div className='search-container'>
        <FaSearch className='search-icon'/>
        <input onChange={(e)=>{handleSearchBar(e.target.value)}} type="text" placeholder='Type to search notes...' />
    </div>
  )
}
