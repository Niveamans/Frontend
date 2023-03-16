import React, { useState } from 'react'
import { useFirebase } from '../../context/Firebase'
import { Delete,Edit,} from '@styled-icons/material'
import EditModal from './EditModal'

const PatientDetails = ({data}) => {
  const firebase = useFirebase()
  const [isModal,setModal] = useState(false)
  function handleClick(){
      // Promise.all([firebase.deleteDocument("patients","002")]);
  }
  

 function handleDelete(){
      firebase.deletePatientfrom(doctorId,patientId)
  }
    
 function handleEdit(){
    setModal(true);
 }
 function closeModal() {
  setModal(false);
}  

async function handleEditSave(values){
  console.log(values)
  firebase.updateDocument("patients",data.patientId,values)
}

  
  return (
  
        
<div className=' bg-zinc-400 p-5'>
<div className=' flex min-w-max w-max gap-3 h-[60%] my-5 mx-5 '>

    <img alt='profile' src='/assets/react.svg' className=' w-[125px]'></img>
       
    <div className=' font-poppins flex flex-col gap-3 w-max'>
        <p>name : {data.name}</p>
        <p>age: {data.age}</p>
        <p>sex: {data.sex}</p>
        <p> blood group: {data.bloodgroup}</p>
        <p>mobile: {data.mobile}</p>
        <p>DOB: {data.dob}</p>
        
    </div>

    </div>
<div className='flex justify-between mx-3'>
  <Delete size={40} className=" cursor-pointer hover:scale-150 transition duration-200" onClick={handleDelete} ></Delete>
  <Edit size={40} className=" cursor-pointer hover:scale-150 transition duration-200" onClick={handleEdit}></Edit>
</div>

    
  <EditModal openModal={handleEdit} open={isModal} closeModal={closeModal} data={data} handleSave={handleEditSave}></EditModal>




</div>




  )
}

export default PatientDetails