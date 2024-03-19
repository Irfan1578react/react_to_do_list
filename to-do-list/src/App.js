import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Additem from './Additem';
import SearchItem from './SearchItem';
function App() {
const [newItem,setNewItem]=useState('') 
const[items,setItems]=useState(JSON.parse(localStorage.getItem("to-do-list")))
const [search,setSearch]=useState('');

const addNewItem=(item) =>{
  const id=(items.length) ?items[items.length-1].id+1 :1
  const list={id,checked:false,item}
  const listItems=[...items,list]
  setItems(listItems)
  localStorage.setItem("to-do-list",JSON.stringify(listItems))
}
const handleCheck= (id) => {
  const itemList=items.map((item) =>{
    return(
    item.id===id ? {...item,checked:!item.checked} : item
    )
  }
  
  )
  setItems(itemList)
  localStorage.setItem("to-do-list",JSON.stringify(itemList))
}
const handleDelete = (id) => {
  const itemList1 = items.filter((item) =>{
    return(
      item.id!==id
    )
  })
  setItems(itemList1)
  localStorage.setItem("to-do-list",JSON.stringify(itemList1))
}

const handleSubmit = (e) =>{
    e.preventDefault();
    if(!newItem) return
    addNewItem(newItem)
    setNewItem('')
}

  return (
   <div className='App'>
    <Header ></Header>
    <Additem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
    <SearchItem search={search} setSearch={setSearch}/>
    <Content items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete}></Content>
    <Footer items={items}></Footer>
   </div>
  );
}

export default App;
