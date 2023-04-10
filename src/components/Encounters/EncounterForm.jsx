import React, { useState } from "react";
import { Formik } from "formik";

const EditForm = ({ data, handleSave }) => {
  const [currentDetails, setCurrentDetails] = useState([]);

  return (
    <div>
      <Formik
        initialValues={{
          status: data.status,
          location: currentDetails.location,
          start: data.period?.start,
          end: data.period?.end,
        }}
        onSubmit={(values, onSubmitProps) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            handleSave(values);
            console.log(values);
            setCurrentDetails(values);
            onSubmitProps.resetForm();
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
            className="flex font-poppins flex-col w-[200px] max-w-max min-w-max  gap-3 mx-auto text-sm sm:text-lg mt-3"
          >
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label>Status: </label>
              <select
                id="status"
                name="status"
                className="w-[68%] rounded-md p-2 focus:outline-none"
                // defaultValue={values.status}
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.status}
              >
                <option value={""} selected hidden></option>
                <option value={"arrived"}>arrived</option>
                <option value={"planned"}>planned</option>
                <option value={"cancelled"}>cancelled</option>
                <option value={"finished"}>finished</option>
                <option value={"triaged"}>triaged</option>
                <option value={"onleave"}>onleave</option>
                <option value={"in-progress"}>in-progress</option>
              </select>
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label>Location: </label>
              <input
                id="location"
                type="text"
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                defaultValue={values.location}
                placeholder="location"
              />
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label>Period Start: </label>
              <input
                id="start"
                type="text"
                name="start"
                onChange={handleChange}
                onBlur={handleBlur}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                defaultValue={values.start}
                placeholder="start"
              />
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label>Period End: </label>
              <input
                id="end"
                type="text"
                name="end"
                onChange={handleChange}
                onBlur={handleBlur}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                defaultValue={values.end}
                placeholder="end"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="font-poppins rounded-md p-4 mt-2 w-[40%] text-blue-50 bg-blue-500 "
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

export default EditForm;
