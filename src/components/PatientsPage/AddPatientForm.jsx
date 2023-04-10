import React from "react";
import { Formik } from "formik";

const AddPatientForm = () => {
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(values, onSubmitprops) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            // handleSave(values);
            console.log(values);
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
            className="flex font-poppins flex-col w-[200px] max-w-max min-w-max  gap-3 mx-auto text-sm sm:text-lg mt-3 "
          >
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="name">First Name : </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.firstName}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="first name"
                // defaultValue={values.name}
              />
            </div>

            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="name">Last Name : </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.lastName}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="last name"
                // defaultValue={values.lastName}
              />
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="dob">DOB : </label>
              <input
                id="dob"
                name="dob"
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="dob"
                // value={values.age}
                className=" focus:outline-none bottom-1 rounded-md p-2"
              />
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label>Sex : </label>

              <select
                name="gender"
                // value={values.gender}
                // defaultValue={values.gender}
                className="rounded-md p-2 "
                placeholder="gender"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value={""} selected hidden></option>
                <option value={"male"}>male</option>
                <option value={"female"}>female</option>
                <option value={"others"}>others</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                className="font-poppins rounded-md p-4 mt-2 w-full text-blue-50 bg-blue-500 "
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddPatientForm;
