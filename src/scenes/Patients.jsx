import UserTab from "../components/UserTab";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ModalTemplate from "../components/Modal/Modal";
import AddPatientForm from "../components/PatientsPage/AddPatientForm";

const Users = () => {
  const [patients, setPatients] = useState([]);
  const currentPractitioner = "956533b9-846b-41c6-8e92-5816a74256d4";
  const [addPatient, setAddPatient] = useState(false);

  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  async function createPatient(data){
    try{
      const response = await axios.post(`http://localhost:3000/patients/`,{
        gender : data.gender,
        name : [
          {
            family : data.firstName,
            given : [
              data.lastName
            ],
            use : "official"
          }
        ],
        generalPractitioner : [
          {
            reference : `Practitioner/${currentPractitioner}`
          }
        ],
        birthDate : `${data?.birthDate}`,
        resourceType : "Patient"
      })
      console.log(response.data);
      window.location.reload();
    }
    catch(e){
      console.log(e);
    }
  }

  async function getUsersOf(practitionerId) {
    try {
      const response = await axios.get(
        `http://localhost:3000/practitioners/${practitionerId}`,
        {
          headers: {
            function: "getPatients",
          },
        }
      );

      setPatients([]);
      response.data.map((data) => {
        // console.log(data.resource);
        setPatients((prev) => [...prev, data.resource]);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsersOf("956533b9-846b-41c6-8e92-5816a74256d4");
  }, []);

  function handleAddPatient() {
    setAddPatient(true);
  }
  function closeModal() {
    setAddPatient(false);
  }

  return (
    <>
      <div className="w-5/6 mx-auto p-4 bg-blue-300 rounded-b-lg font-poppins">
        <div className="flex justify-between items-center mb-4">
          <p className="text-[45px] font-dmserif text-white">Your Patients</p>
          <div>
            <button
              onClick={handleAddPatient}
              className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md"
            >
              Create a patient
            </button>
            <button className="px-4 py-2 bg-red-400 text-white rounded-md">
              Logout
            </button>
          </div>
        </div>
        <UserTab
          serial="S.No"
          name="Name"
          sex="Sex"
          age="age"
          action="Action"
          id=""
        />

        {patients.map((patient, index) => {
          return (
            <UserTab
              serial={index + 1}
              key={patient.id}
              id={patient.id}
              name={patient.name[0].given[0]}
              sex={patient.gender}
              isSeeing={true}
              age={calculate_age(new Date(patient.birthDate))}
            />
          );
        })}
        <ModalTemplate
          openModal={handleAddPatient}
          open={addPatient}
          closeModal={closeModal}
        >
          <AddPatientForm handleSave={createPatient}></AddPatientForm>
        </ModalTemplate>
      </div>
    </>
  );
};

export default Users;
