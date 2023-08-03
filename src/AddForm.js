import React from 'react'
import './App.css';
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react';

const AddForm = ({newItem,setNewItem,handleAdd}) => {
  const inpuRef=useRef();
  return (
        <form className='AddForm' onSubmit={handleAdd}>
      {/* onSubmit={(event)=>handleAdd(event) */}
      <label  >Add Item</label>
        <input 
        autoFocus
        type="text"
        ref={inpuRef}
        id="addForm"
        placeholder='Add_Item'
        className='addFm'
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
        required
        />
        <button type="submit" id="btn" aria-label='Add item'
         onClick={()=>inpuRef.current.focus()} >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddForm