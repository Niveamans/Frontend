import React from 'react'
import { Navigate,redirect,Link } from 'react-router-dom'

const Checkup = ({data}) => {
  
  
  
  return (
    <Link to={`/checkups/${data.checkupId}`}>
    <div className=' h-9 mx-12 bg-gray-400 flex items-center justify-evenly mb-5 cursor-pointer' >
    <div><p>Date: {data.date}</p></div>
    <div><p>Doctor: prem</p></div>
    <div><p>Diagnosis: {data.diagnosis}</p></div>
    </div>
    </Link>
  )
}

export default Checkup