import { Formik } from "formik";
import Select from "react-select";
import React from "react";

const AddObservation = ({ data, handleSave }) => {
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
            //   console.log(values);
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
            className="flex font-poppins flex-col w-[200px] max-w-max min-w-max  gap-3 mx-auto text-sm sm:text-lg mt-3 "
          >
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="status">Status : </label>
              <input
                id="status"
                type="text"
                name="status"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="status"
                defaultValue={values.name}
              />
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="effectiveDateTime">Date-Time : </label>
              <input
                id="effectiveDateTime"
                type="text"
                name="effectiveDateTime"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="effectiveDateTime"
                defaultValue={values.name}
              />
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="code">Code : </label>
              <input
                id="code"
                type="text"
                name="code"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="code"
                defaultValue={values.name}
              />
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="display">Display : </label>
              <input
                id="display"
                type="text"
                name="display"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="display"
                defaultValue={values.name}
              />
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="system">System : </label>
              <input
                id="system"
                type="text"
                name="system"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="system"
                defaultValue={values.name}
              />
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="value">Value : </label>
              <input
                id="value"
                type="text"
                name="value"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="value"
                defaultValue={values.name}
              />
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="unit">Unit : </label>
              <input
                id="unit"
                type="text"
                name="unit"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="unit"
                defaultValue={values.name}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddObservation;
