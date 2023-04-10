import { Formik } from "formik";
import React from "react";

const val = [
    {label :"registered" ,value:"registered"},
    {label :"preliminary" ,value:"preliminary"},
    {label :"final" ,value:"final"},
    {label :"amended +" ,value:"amended +"},
]
const EditObservationForm = ({ data, handleSave }) => {
  console.log(data)
    return (
    <div>
      <Formik
        initialValues={
          {
            status : data.status,
            effectiveDateTime : data.effectiveDateTime,
            code : data.code.coding[0].code,
            display : data.code.coding[0].display,
            system : data.code.coding[0].system,
            value : data.valueQuantity.value,
            unit : data.valueQuantity.unit,  
          }
        }
        onSubmit={(values, onSubmitProps) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          
            const newData = {
                resourceType: "Observation",
                id: data.id,
                status: values.status,
                effectiveDateTime: values.effectiveDateTime,
                code: {
                  coding: [
                    {
                      system: values.system,
                      code: values.code,
                      display: values.display,
                    },
                  ],
                },
                context: data?.context,
                valueQuantity: {
                  value: values.value,
                  unit: values.unit,
                },
              };
            // console.log(values);
            handleSave(newData);
            console.log(values);
            // setSubmitting(false);
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
            className="flex font-poppins flex-col w-[200px] max-w-max min-w-max  gap-3 mx-auto text-sm sm:text-lg mt-3 "
          >
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="status">Status : </label>
              <select
                name="status"
                id="status"
                className=" focus:outline-none bottom-1 rounded-md p-2 w-[65%]"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.status}
              >
                {val.map((i)=>(
                    <option value={i.value}>{i.label}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="dateTime">Date-Time : </label>
              <input
                id="effectiveDateTime"
                type="text"
                name="effectiveDateTime"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.effectiveDateTime}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="effectiveDateTime"
                defaultValue={values.effectiveDateTime}
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
                value={values.code}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="code"
                defaultValue={values.code}
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
                value={values.display}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="display"
                defaultValue={values.display}
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
                value={values.system}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="system"
                defaultValue={values.system}
              />
            </div>
            <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
              <label for="value">Value : </label>
              <input
                id="value"
                type="number"
                name="value"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.valueQuantity.value}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="value"
                value={values.value}
                defaultValue={values.value}
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
                // value={values.valueQuantity.unit}
                className=" focus:outline-none bottom-1 rounded-md p-2"
                placeholder="unit"
                defaultValue={values.unit}
                value={values.unit}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="font-poppins rounded-md p-4 mt-2 w-[40%] text-blue-50 bg-blue-500 "
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

export default EditObservationForm;
