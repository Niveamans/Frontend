import React from 'react'
// import {datas} from "./data"

const List = ({inputText,data,handleSave}) => {
    console.log(data)
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el?.name?.toLowerCase().includes(inputText)||el?.patientId?.toLowerCase().includes(inputText)
        }
    })
    console.log(filteredData)




    return (
    <div>
           
            {filteredData.map((item) => (
               <div className='flex justify-between gap-4'>

             
             <p >name: {item?.name}</p>
             <p>Id: {item?.patientId}</p>
             
            
            
            <div>{item?.doctors.includes("001")?<p>existing patient</p>:<button onClick={()=>handleSave(item?.patientId)}>add patient</button>}</div>   
            </div>
            
            ))}
            {/* {
                data.map((item)=><li>{item.name}</li>)
            } */}
       

    </div>
  )
}

export default List