import React from "react";
import { Formik } from "formik";


const CreatePatientForm = ({ handleSave}) => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-center font-dmserif text-white text-xl sm:text-2xl md:text-3xl my-5'>
          Create a patient
        </h1>

     
      </div>

      <Formik
        initialValues={{
          name: '',
          // age: data.age,
          sex: '',
          // bloodGroup: data.bloodgroup,
          // mobile: data.mobile,
          dob: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            handleSave(values);
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
                value={values.email}
                className=' focus:outline-none bottom-1 rounded-md p-2'
                placeholder='name'
                defaultValue={values.name}
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
              <input
                type='text'
                name='sex'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className='rounded-md p-2 '
                placeholder='sex'
                defaultValue={values.sex}
              />
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
                type='date'
                name='dob'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.DOB}
                className='rounded-md p-2'
                placeholder='mobile'
                defaultValue={values.DOB}
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

export default CreatePatientForm;
