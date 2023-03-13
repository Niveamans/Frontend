import React from 'react'

const PatientDetails = (props) => {
  return (
  
        

<div className=' flex min-w-max w-max gap-3 h-[60%] bg-zinc-400 my-5 mx-5 p-5'>
<div className=' rounded-full'>
    <img alt='profile' src='/assets/react.svg' className=' basis-1/3 h-1/3'></img>
        </div>
    <div className=' font-poppins flex flex-col gap-3 w-max'>
        <p>name : vikki</p>
        <p>age: 19</p>
        <p>sex: male</p>
        <p> blood group: O+</p>
        <p>mobile: 243576876</p>
    </div>
</div>



  )
}

export default PatientDetails