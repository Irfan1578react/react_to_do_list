import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const Lineitem = ({item,handleCheck,handleDelete}) => {
  return (
    <li  className="item" key={item.id}>
    <input type="checkbox" checked={item.checked}  onChange={() => handleCheck(item.id)}/>
    <label onDoubleClick={() => handleCheck(item.id) }style={(item.checked) ? {textDecoration:"line-through"}: null}>{item.item}</label>

    <FaTrashAlt role="button" onClick={() => handleDelete(item.id)} aria-label={`Delete ${item.item}`}/>
    </li>
  )
}

export default Lineitem
