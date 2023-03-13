import UserTab from "../components/UserTab";
import {useState,useEffect} from "react"
import { useFirebase } from "../context/Firebase";



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

        <UserTab id="S.No" name="Name" sex="Sex" age="Age" bloodgroup="Blood" actions="Actions"/>     


        {firebase.patientData.map((patient, index) =>{

            return (<UserTab id={addOne(index)} key={patient.mobile} name={patient.name} sex={patient.sex} age={patient.age} bloodgroup={patient.bloodgroup}/>)     


        })}

       

     

    


    

        </div>


        </>
    )
}

export default Users;