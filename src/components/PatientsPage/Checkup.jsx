import React from "react";
import {  Link } from "react-router-dom";

const Checkup = ({ data, index }) => {
  const pathname = window.location.pathname;
  const date = new Date(data.meta.lastUpdated);
  // console.log(date.toLocaleString())
  // const startDate = start.toLocaleString();
  
  
  
  return (
    <Link to={`encounters/${data.id}`}>
      <div className='bg-blue-500 flex items-center justify-evenly mb-5 cursor-pointer rounded-sm text-blue-50'>
        <div className='px-5 py-2'>
          <p>{index}</p>
        </div>
        
        <div className='px-5 py-2'>
          <p>Date: {date.toLocaleDateString()}</p>
        </div>
        
        <div className='px-5 py-2'>
          <p>status: {data.status}</p>
        </div>
      </div>
    </Link>
  );
};

export default Checkup;
