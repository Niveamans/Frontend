import React from "react";

const PatientDetails = ({ data }) => {
  return (
    <div className=' flex min-w-max w-max gap-3 h-[60%] bg-zinc-400 my-5 mx-5 p-5'>
      <div className=' rounded-full'>
        <img
          alt='profile'
          src='/assets/react.svg'
          className=' basis-1/3 h-1/3'
        ></img>
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
  );
};

export default PatientDetails;
