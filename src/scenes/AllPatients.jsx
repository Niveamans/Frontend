import UserTab from "../components/UserTab";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { all } from "axios";

const AllPatients = () => {
  const [allPatients, setAllPatients] = useState([]);
  const currentPractitioner = "956533b9-846b-41c6-8e92-5816a74256d4";

  function getValuesFromMap(map) {
    return Array.from(map.values());
  }

  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  async function getAllPatients() {
    try {
      const response = await axios.get(`http://localhost:3000/patients`, {
        headers: {
          function: "getAllPatients",
        },
      });
      setAllPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllPatients();
  }, []);

  return (
    <>
      <div className='w-full py-12 mx-auto p-4 bg-blue-300 rounded-b-lg font-poppins'>
        <div className='flex justify-between items-center mb-4 bg-blue-500 p-2 rounded-md'>
          <p className='text-[45px] font-dmserif text-white'>All Patients</p>
          <div>
            <button className='px-4 py-2 bg-blue-300 text-white rounded-md'>
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
        />

        {allPatients.map((patient, index) => {
          const practitioners = [];
          if (patient.generalPractitioner) {
            patient.generalPractitioner.map((practitioner) => {
              practitioners.push(practitioner.reference);
            });

            var isSeeing = practitioners.includes(
              `Practitioner/${currentPractitioner}`
            );
          } else isSeeing = false;

          return (
            <UserTab
              serial={index + 1}
              id={patient.id}
              name={patient.name[0].given[0]}
              patient={patient}
              sex={patient.gender}
              age={calculate_age(new Date(patient.birthDate))}
              currentPractitioner={currentPractitioner}
              isSeeing={isSeeing}
              practitioners={patient.generalPractitioner}
            />
          );
        })}
      </div>
    </>
  );
};

export default AllPatients;
