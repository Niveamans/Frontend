import React from "react";
import { Formik } from "formik";

const CheckUpForm = ({ handleSave }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-center font-dmserif text-white text-xl sm:text-2xl md:text-3xl my-5">
          Create a Checkup
        </h1>
      </div>

      <Formik
        initialValues={{
          status: "",
        }}
        onSubmit={(values, onSubmitprops) => {
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
            className="flex font-poppins flex-col w-[200px] max-w-max min-w-max  gap-3 mx-auto text-sm sm:text-lg mt-3 "
          >
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="status">Status: </label>
              <select
                id="status"
                type="text"
                name="status"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.status}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="status"
                // defaultValue={values.status}
              >
                <option value="" selected hidden></option>
                <option value="planned">planned</option>
                <option value="arrived">arrived</option>
                <option value="triaged">triaged</option>
                <option value="finished">finished</option>
                <option value="cancelled ">cancelled </option>
                <option value="in-progress">in-progress</option>
                <option value="onleave">onleave</option>
              </select>
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="location">Location : </label>
              <input
                type="text"
                id="location"
                name="location"
                className="focus:outline-none bottom-1 rounded-md p-2"
                placeholder="Location"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="diagnosis">Diagnosis : </label>
              <input
                type="text"
                id="diagnosis"
                name="diagnosis"
                className="focus:outline-none bottom-1 rounded-md p-2"
                placeholder="Diagnosis"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="flex justify-center">
              <button
                className="font-poppins rounded-md p-4 mt-2 w-full text-blue-50 bg-blue-500 "
                type="submit"
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
