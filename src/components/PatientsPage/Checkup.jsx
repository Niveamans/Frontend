import React from "react";
import { Navigate, redirect, Link } from "react-router-dom";

const Checkup = ({ data, index }) => {
  const pathname = window.location.pathname;
  return (
    <Link to={`${pathname}/${data.checkupId}`}>
      <div className='bg-blue-500 flex items-center justify-evenly mb-5 cursor-pointer rounded-sm text-blue-50'>
        <div className='px-5 py-2'>
          <p>{index}</p>
        </div>
        |
        <div className='px-5 py-2'>
          <p>Date: {data.date}</p>
        </div>
        |
        <div className='px-5 py-2'>
          <p>Doctor: prem</p>
        </div>
        |
        <div className='px-5 py-2'>
          <p>Diagnosis: {data.diagnosis}</p>
        </div>
      </div>
    </Link>
  );
};

export default Checkup;
