import React from "react";
import { Formik } from "formik";


const CheckUpForm = ({ handleSave}) => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-center font-dmserif text-white text-xl sm:text-2xl md:text-3xl my-5'>
          Create a Encounter
        </h1>

     
      </div>

      <Formik
        initialValues={{
          status: '',
        
    
        }}


        onSubmit={(values,onSubmitprops) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            handleSave(values);
            onSubmitprops.resetForm()
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
              <label for='status'>Status: </label>
              <input
                id='status'
                type='text'
                name='status'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.status}
                className=' focus:outline-none bottom-1 rounded-md p-2'
                placeholder='name'
                defaultValue={values.status}
              />
            </div>

            
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

export default CheckUpForm;
