import UserTab from "../components/UserTab";
import { useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Users = () => {
  const firebase = useFirebase();

  const fetchPatientsData = (docId) => {
    const Data = firebase.getAllPatientsOf(docId);
  };

  const addPatient = (doctorId, patientId) => {
    const Data = firebase.addPatientTo(doctorId, patientId);
  };

  const removePatient = (doctorId, patientId) => {
    const Data = firebase.deletePatientfrom(doctorId, patientId);
  };

  const addOne = (index) => {
    return index + 1;
  };

  useEffect(() => {
    Promise.all([fetchPatientsData("001")]);
  }, []);

  const auth = getAuth();

  return (
    <>
      <div className='w-5/6 mx-auto p-4 bg-blue-300 rounded-b-lg font-poppins'>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-[45px] font-dmserif text-white'>Patients</p>
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded-md'
            onClick={() => {
              signOut(auth)
                .then(() => {
                  console.log("signed out");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Logout
          </button>
        </div>
        <UserTab
          serial='S.No'
          name='Name'
          sex='Sex'
          age='Age'
          bloodgroup='Blood'
        />

        {firebase.patientData.map((patient, index) => {
          return (
            <Link to={`/${patient.patientId}`}>
              <UserTab
                serial={addOne(index)}
                key={patient.mobile}
                name={patient.name}
                sex={patient.sex}
                age={patient.age}
                bloodgroup={patient.bloodgroup}
              />{" "}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Users;
