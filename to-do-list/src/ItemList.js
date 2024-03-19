import React from 'react'
import Lineitem from './Lineitem';
const ItemList = ({items,handleCheck,handleDelete}) => {
  return (
      <ul> 
       {items.map((item) => {
        return(
           <Lineitem  item={item} handleCheck={handleCheck} handleDelete={handleDelete} key={item.id}/>

        )

       })}
       </ul>
  )
}

export default ItemList
      