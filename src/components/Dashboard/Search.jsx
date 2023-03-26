import React,{useState} from 'react'

import List from './List';
const Search = ({data,handleSave}) => {
  const [inputText, setInputText] = useState('');
  // const [filteredData,setFilteredData] = useState([]);
  function handleChange(e){
    e.preventDefault();
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase)
    console.log(lowerCase)
 

  }

 
  
  return (
    <div>
       
      <input placeholder='search' onChange={handleChange} value={inputText} type="search" className=' my-10 w-[100%] ' ></input>

    <div>
      <List inputText={inputText} handleSave={handleSave} data={data}></List>
    </div>

    </div>
  )
}

export default Search