import UserTab from "../components/UserTab";
import {useState,useEffect} from "react"
import { useFirebase } from "../context/Firebase";
import { Link } from "react-router-dom";




const Users = () => {
    const firebase = useFirebase();
  
    const fetchEventData = (name) => {
      const Data =  firebase.getAllDocuments(name);
      
    };
  
    useEffect(() => {

        Promise.all([fetchEventData("patients")])
      
    }, []);

    const addOne = (index) =>{
        return index + 1;
    }

    




    return (
        <>
      

        <div className="w-5/6 mx-auto p-4 bg-blue-100 rounded-md">

        <UserTab serial="S.No" name="Name" sex="Sex" age="Age" bloodgroup="Blood"/>     


        {firebase.patientData.map((patient, index) =>{

            return (<Link to={`/${patient.patientId}`}><UserTab serial={addOne(index)} key={patient.mobile} name={patient.name} sex={patient.sex} age={patient.age} bloodgroup={patient.bloodgroup}/> </Link>)     

        })}

        </div>


        </>
    )
}

export default Users;