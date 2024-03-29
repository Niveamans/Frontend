import UserTab from "../components/UserTab";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ModalTemplate from "../components/Modal/Modal";
import AddPatientForm from "../components/PatientsPage/AddPatientForm";

const Users = () => {
  const [patients, setPatients] = useState([]);
  const currentPractitioner = "ae4cae6a-1d69-47a2-9d30-067eda386c32";
  const [addPatient, setAddPatient] = useState(false);

  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  async function createPatient(data) {
    try {
      console.log(data);
      const response = await axios.post(`http://34.131.157.197/patients/`, {
        gender: data.gender,
        name: [
          {
            family:
              data.lastName.charAt(0).toUpperCase() + data.lastName.slice(1),
            given: [
              data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1),
            ],
            use: "official",
          },
        ],
        generalPractitioner: [
          {
            reference: `Practitioner/${currentPractitioner}`,
          },
        ],
        birthDate: `${data?.birthDate}`,
        resourceType: "Patient",
      });
      console.log(response.data);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }

  async function getUsersOf(practitionerId) {
    try {
      const response = await axios.get(
        `http://34.131.157.197/practitioners/${practitionerId}`,
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
    getUsersOf(currentPractitioner);
  }, []);

  function handleAddPatient() {
    setAddPatient(true);
  }
  function closeModal() {
    setAddPatient(false);
  }

  return (
    <>
      <div className='w-full py-12 mx-auto p-4 bg-blue-300 rounded-b-lg font-poppins'>
        <div className='flex justify-between items-center mb-4 bg-blue-500 p-2 rounded-md'>
          <p className='text-[45px] font-dmserif text-white'>Your Patients</p>
          <div>
            <button
              onClick={handleAddPatient}
              className='px-4 py-2 mr-2 bg-blue-300 text-white rounded-md'
            >
              Create a patient
            </button>
          </div>
        </div>
        <UserTab
          serial='S.No'
          name='Name'
          sex='Sex'
          age='age'
          action='Action'
          id=''
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
