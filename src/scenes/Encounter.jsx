import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Edit } from "@styled-icons/material";
import { useEffect } from "react";
import ModalTemplate from "../components/Modal/Modal";
import { Formik } from "formik";
import Select from "react-select";

const statuses = [
  { label: "arrived" },
  { label: "planned" },
  { label: "cancelled" },
  { label: "finished" },
  { label: "triaged" },
  { label: "onleave" },
  { label: "in-progress" },
];
const Encounter = () => {
  const [encounterData, setEncounterData] = useState({});
  const [editEncounter, setEditEncounter] = useState({});
  const [isEditModal, setEditModal] = useState(false);

  const params = useParams();

  async function fetchEncounter() {
    try {
      const response = await axios.get(
        `http://localhost:3000/encounters/${params.encounterid}`
      );
      console.log(response);
      console.log(response.data);
      setEncounterData(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function updateEncounter() {
    try {
      const response = await axios.put(
        `http://localhost:3000/encounters/${params.encounterid}`
      );
      console.log(response.data);
      setEditEncounter(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    Promise.all([fetchEncounter(), updateEncounter()]);
  }, []);

  function handleEdit() {
    setEditModal(true);
  }

  function closeModal() {
    setEditModal(false);
  }

  return (
    <div className="flex md:flex-row flex-col items-center md:items-start gap-2">
      <div className="flex flex-col bg-blue-300 rounded-lg p-6 gap-4 max-h-screen">
        <div className="flex justify-between">
          <p className="font-dmserif text-white md:text-[45px] text-3xl">
            Encounter
          </p>
          <button onClick={handleEdit}>
            <Edit className="fill-white w-8 hover:w-12 hover:transition-all hover:duration-300" />
          </button>
        </div>
        <div className="p-8 gap-2 bg-blue-500 rounded-lg md:text-xl text-lg">
          <div className="px-6 py-2 flex flex-row justify-between">
            <div>Status : </div>
            <div>{encounterData.status}</div>
          </div>
          <div className="px-6 py-2 flex flex-row justify-between">
            <div>Location : </div>
            <div>Bangalore</div>
          </div>
          <div className="px-6 py-2 flex flex-row justify-between">
            <div>Period Start : </div>
            <div>02-04-2023 11:30:25</div>
          </div>
          <div className="px-6 py-2 flex flex-row justify-between">
            <div>Period End : </div>
            <div>05-04-2023 04:59:59</div>
          </div>
        </div>
      </div>
      <div>{/* Observations come inside this div */}</div>
      <ModalTemplate
        openModal={handleEdit}
        open={isEditModal}
        closeModal={closeModal}
      >
        <Formik
          initialValues={{
            status: encounterData.status,
            location: "Bangalore",
            start: "02-04-2023 11:30:25",
            end: "05-04-2023 04:59:59",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
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
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              className="flex font-poppins flex-col w-[200px] max-w-max min-w-max  gap-3 mx-auto text-sm sm:text-lg mt-3"
            >
              <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
                <label for="status">Status: </label>
                <Select
                  options={statuses}
                  className="w-[68%] rounded-md p-2 focus:outline-none"
                  placeholder={encounterData.status}
                  defaultValue={encounterData.status}
                ></Select>
              </div>
              <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
                <label for="status">Location: </label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" focus:outline-none bottom-1 rounded-md p-2"
                  defaultValue={"Bangalore"}
                  placeholder="location"
                />
              </div>
              <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
                <label for="status">Period Start: </label>
                <input
                  id="start"
                  type="text"
                  name="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" focus:outline-none bottom-1 rounded-md p-2"
                  defaultValue={"02-04-2023 11:30:25"}
                  placeholder="start"
                />
              </div>
              <div className="flex justify-between items-center gap-4 bg-blue-500 rounded-md p-2">
                <label for="status">Period End: </label>
                <input
                  id="end"
                  type="text"
                  name="end"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" focus:outline-none bottom-1 rounded-md p-2"
                  defaultValue={"05-04-2023 04:59:59"}
                  placeholder="end"
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </ModalTemplate>
    </div>
  );
};

export default Encounter;
