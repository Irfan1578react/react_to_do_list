import React from 'react'

const Footer = ({items}) => {
  return (
    <footer> 
      <p>{items.length} {(items.length===1) ?"Item" :"Items"} Present </p>
      </footer>
  )
}

export default Footer
