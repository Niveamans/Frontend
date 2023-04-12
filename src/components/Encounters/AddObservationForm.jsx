import { Formik } from "formik";
import React from "react";

const AddObservation = ({ handleSave }) => {

  return (
    <div>
      <Formik
        initialValues={
          {
            // status: data.status,
            // location: currentDetails.location,
            // start: currentDetails.start,
            // end: currentDetails.end,
          }
        }
        onSubmit={(values, onSubmitProps) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            handleSave(values);
            //   setCurrentDetails(values);
            //   onSubmitProps.resetForm();
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
              <label for='status'>Status : </label>
              <select
                name='status'
                id='status'
                className=' focus:outline-none bottom-1 rounded-md p-2 w-[65%]'
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" selected hidden></option>
                <option value={"registered"}>registered</option>
                <option value={"preliminary"}>preliminary</option>
                <option value={"final"}>final</option>
                <option value={"amended +"}>amended +</option>
              </select>
            </div>

            <div className='flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2'>
              <label for='code'>Code : </label>
              <input
                id='code'
                type='text'
                name='code'
                onChange={handleChange}
                onBlur={handleBlur}
                className=' focus:outline-none bottom-1 rounded-md p-2'
                placeholder='code'
              />
            </div>
            <div className='flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2'>
              <label for='display'>Display : </label>
              <input
                id='display'
                type='text'
                name='display'
                onChange={handleChange}
                onBlur={handleBlur}
                className=' focus:outline-none bottom-1 rounded-md p-2'
                placeholder='display'
              />
            </div>
            <div className='flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2'>
              <label for='system'>System : </label>
              <input
                id='system'
                type='text'
                name='system'
                onChange={handleChange}
                onBlur={handleBlur}
                className=' focus:outline-none bottom-1 rounded-md p-2'
                placeholder='system'
              />
            </div>
            <div className='flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2'>
              <label for='value'>Value : </label>
              <input
                id='value'
                type='number'
                name='value'
                onChange={handleChange}
                onBlur={handleBlur}
                className=' focus:outline-none bottom-1 rounded-md p-2'
                placeholder='value'
              />
            </div>
            <div className='flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2'>
              <label for='unit'>Unit : </label>
              <input
                id='unit'
                type='text'
                name='unit'
                onChange={handleChange}
                onBlur={handleBlur}
                className=' focus:outline-none bottom-1 rounded-md p-2'
                placeholder='unit'
              />
            </div>
            <div className="flex justify-center">
              <button type='submit' className="font-poppins rounded-md p-4 mt-2 w-full text-blue-50 bg-blue-500">Submit</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddObservation;
