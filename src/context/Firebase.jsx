import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc,getDoc,doc,collectionGroup } from "firebase/firestore";

// Import Required Firebase Utility

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_SENDER_ID ,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
};

const FirebaseContext = createContext(null);
const firebaseApp = initializeApp(firebaseConfig);

// Create an instance of the imported firebase utility

const db = getFirestore(firebaseApp);

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = (props) => {
  // const [allDocuments, setallDocuments] = useState([]);


  const [patientData,setPatientData] = useState([]);
  const [patientDetail,setPatientDetail] = useState({});
  const [checkups,setCheckups] = useState([]);

  async function getAllDocuments(collectionName) {
    try {
      const collectionData = await getDocs(collection(db, collectionName));
      
      
    if(collectionName === "patients"){
        setPatientData([]);
        collectionData.forEach((doc) =>
        {
          setPatientData((prev) => {
            return [...prev,doc.data()];
          });
          console.log(doc.data())
          
        
        }  
       
        );
  
        
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  async function getDocument(collectionName,docId){
    try {
    const snap = await getDoc(doc(db,collectionName,docId))
      
    if(collectionName==="patients"){
      setPatientDetail(snap.data());
      console.log(snap.data());
      
      
    }



    
    } catch (error) {
      console.log(error)
    }
  }


  async function getSubCollection(collectionName,docId,subCollectionName){
    const itemRef = doc(db,collectionName,docId)
    const collectionRef = collection(itemRef,subCollectionName)
    const subCollectionData = await getDocs(collectionRef)
    if(collectionName==="patients" && subCollectionName=="checkups"){
        setCheckups([]);
        subCollectionData.forEach((docu)=>{
          setCheckups((prev)=>[...prev,docu.data()]);
          console.log(docu.data());
        })
    }

  }
  

  return (
    <FirebaseContext.Provider
      value={{
        // Pass the functions created to be used globally

        getAllDocuments,
        patientData,
        getDocument,
        patientDetail,
        getSubCollection,
        checkups,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
