import React from 'react'
import {FaPlus} from "react-icons/fa"
const Additem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form  className='addForm' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='additem'>Add Item</label>
        <input autoFocus id='additem' type="text" placeholder="Add Item" value={newItem} onChange={(e) => setNewItem(e.target.value)} required></input>
        <button type="submit" aria-label='Add Item'> <FaPlus></FaPlus></button>
    </form>
  )
}

export default Additem
