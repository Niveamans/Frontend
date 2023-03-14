import React from 'react'
import { useFirebase } from '../../context/Firebase'
import { Delete,Edit } from '@styled-icons/material'

const PatientDetails = ({data}) => {
  const firebase = useFirebase()
  function handleClick(){
      // Promise.all([firebase.deleteDocument("patients","002")]);
  }
  
  
  return (
  
        
<div className=' bg-zinc-400 p-5'>
<div className=' flex min-w-max w-max gap-3 h-[60%] my-5 mx-5 '>
<div className=' rounded-full w-[40%]'>
    <img alt='profile' src='/assets/react.svg' className=' w-[125px]'></img>
        </div>
    <div className=' font-poppins flex flex-col gap-3 w-max'>
        <p>name : {data.name}</p>
        <p>age: {data.age}</p>
        <p>sex: {data.sex}</p>
        <p> blood group: {data.bloodgroup}</p>
        <p>mobile: {data.mobile}</p>
        <p>DOB: {data.dob}</p>
        
    </div>

    </div>
<div className='flex justify-between'>
  <Delete size={40} className=" cursor-pointer hover:scale-150 transition duration-200" ></Delete>
  <Edit size={40} className=" cursor-pointer hover:scale-150 transition duration-200" ></Edit>
</div>
</div>




  )
}

export default PatientDetails