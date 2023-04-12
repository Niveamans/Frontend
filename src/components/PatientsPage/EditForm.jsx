import React from "react";
import { Formik } from "formik";


const EditForm = ({ data, handleSave}) => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-center font-dmserif text-white text-xl sm:text-2xl md:text-3xl my-5'>
          Edit patient details
        </h1>

     
      </div>

      <Formik
        initialValues={{

          gender: data.gender,
          birthDate: data.birthDate,
          lastName: data.name[0].family,
          name: data.name[0].given[0],
          use:data.name[0].use,
        }}
        onSubmit={(values, onSubmitprops ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            handleSave(values);
            onSubmitprops.resetForm();
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
          resetForm,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className='flex font-poppins flex-col w-[200px] max-w-max min-w-max  gap-3 mx-auto text-sm sm:text-lg mt-3 '
          >
            


            <div className='flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2'>
              <label for='name'>Name: </label>
              <input
                id='name'
                type='text'
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className=' focus:outline-none bottom-1 rounded-md p-2'
                placeholder='name'
                defaultValue={values.name}
              />
            </div>


            <div className='flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2'>
              <label for='name'>lastName: </label>
              <input
                id='lastName'
                type='text'
                name='lastName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                className=' focus:outline-none bottom-1 rounded-md p-2'
                placeholder='lastName'
                defaultValue={values.lastName}
              />
            </div>




            {/* <div className='flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2'>
              <label for='age'>Age: </label>
              <input
                type='number'
                name='age'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder='age'
                defaultValue={values.age}
                className='rounded-md p-2 '
              />
            </div> */}

            <div className='flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2'>
              <label>Sex: </label>
             
              <select
              name='gender'
              // value={values.gender}
              // defaultValue={values.gender}
              className='rounded-md p-2 '
              placeholder='gender'
              onChange={handleChange}
              onBlur={handleBlur}
                
                
              >
              <option value="" selected hidden></option>
              <option value={"male"}>male</option>
              <option value={"female"}>female</option>
              <option value={"other"}>others</option>

              </select>


            </div>

            {/* <div className='flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2'>
              <label> BloodGroup: </label>
              <input
                type='text'
                name='BloodGroup'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className=' rounded-md p-2'
                placeholder='Blood Group'
                defaultValue={values.bloodGroup}
              />
            </div> */}

            <div className='flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2'>
              <label> DOB: </label>
              <input
                type="date"
                name='birthDate'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.birthDate}
                className='rounded-md p-2'
                placeholder='dob'
                defaultValue={values.birthDate}
              />
            </div>

            {/* <div className='flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2'>
              <label> Mobile: </label>
              <input
                type='tel'
                name='mobile'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobile}
                className='rounded-md p-2'
                placeholder='mobile'
                defaultValue={values.mobile}
              />
            </div> */}
            <div className='flex justify-center'>
              <button
                className='font-poppins rounded-md p-4 mt-2 w-full text-blue-50 bg-blue-500 '
                type='submit'
                disabled={isSubmitting}
              >
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditForm;
