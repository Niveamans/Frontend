import React from 'react'
import { Formik } from 'formik';

const EditForm = ({data,handleSave}) => {
  
    
    return (
    <div>
       <h1 className=' text-center text-xl sm:text-2xl md:text-3xl'>Edit patient details</h1>
     <Formik
       initialValues={{ name: data.name, age:data.age , sex:data.sex, bloodGroup: data.bloodgroup, mobile:data.mobile, dob: data.dob }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           handleSave(values)
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         resetForm
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} className="flex font-poppins flex-col w-[200px] max-w-max min-w-max  gap-3 mx-auto text-sm sm:text-lg mt-3 ">
           <div>
           <label for="name"  >name: </label>
           <input
             id = "name"
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             className=" focus:outline-none bottom-1"
             placeholder='name'
             defaultValue={values.name}
           />
          
           </div>
           
          

           <div>
           <label for="age"  >age: </label>
           <input
             type="number"
             name="age"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             placeholder='age'
             defaultValue={values.age}
             className=" "
           />
           </div>
           
           <div>
           <label   >sex: </label>
            <input
             type="text"
             name="sex"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             className=" "
             placeholder='sex'
             defaultValue={values.sex}
           />
           </div>
           
           <div>
           <label > BloodGroup: </label>
            <input
             type="text"
             name="BloodGroup"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             className=" "
             placeholder='Blood Group'
             defaultValue={values.bloodGroup}
           /></div>
            
            <div>
           <label > DOB: </label>
            <input
             type="date"
             name="dob"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.DOB}
             className=""
             placeholder='mobile'
             defaultValue={values.DOB}
             
           /></div>

           <div>
           <label > Mobile: </label>
            <input
             type="tel"
             name="mobile"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.mobile}
             className=""
             placeholder='mobile'
             defaultValue={values.mobile}
             
           /></div>
           <div className='flex justify-center'>
           <button className=' font-poppins rounded-xl px-5 py-2 bg-blue-400 ' type="submit" disabled={isSubmitting}>
             Save
           </button>
           </div>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default EditForm