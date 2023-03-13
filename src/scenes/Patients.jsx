import React from 'react'
import PatientDetails from '../components/PatientsPage/PatientDetails'
import Checkup from '../components/PatientsPage/Checkup'
import { useParams } from 'react-router-dom'
const Patients = () => {
  const params = useParams()
  console.log(params.Patient)
  
  
  return (
    <div className='flex md:flex-row flex-col items-center md:items-start'>
    <PatientDetails></PatientDetails>
    <div className='flex flex-col w-full  max-h-screen  gap-2 bg-slate-200'>
    <div className='flex justify-center mt-6'>
        <h1 className=' font-poppins md:text-3xl text-xl'>Checkups</h1>
    </div>
    
    <div className=' max-h-full overflow-y-scroll'>
    <Checkup></Checkup>
    <Checkup></Checkup>
    <Checkup></Checkup>
    <Checkup></Checkup>
    <Checkup></Checkup>
    <Checkup></Checkup>
    <Checkup></Checkup>
    <Checkup></Checkup>
    <Checkup></Checkup>
    <Checkup></Checkup>
    <Checkup></Checkup>
    <Checkup></Checkup>
    </div>

 
    </div>
    
    
    </div>
  )
}

export default Patients