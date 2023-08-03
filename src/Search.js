import React from 'react'
import './App.css';
const Search = ({search,setSearch}) => { 
  return (
    <div>
        <label htmlFor="">Search</label>
        <input type="text"
            id="addForm"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            // id="search"
             />
    </div>
  )
}

export default Search