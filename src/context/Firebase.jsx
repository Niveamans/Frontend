import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  getDoc,
  doc,
  collectionGroup,
  query,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

// Import Required Firebase Utility

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_SENDER_ID,
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
  // to store all the patients in the database
  const [allPatientData, setAllPatientData] = useState([]);

  const [patientDetail, setPatientDetail] = useState({});

  const [checkups, setCheckups] = useState([]);

  // to store the patients of one doc
  const [patientData, setPatientData] = useState([]);

  // get all the patients in the database
  async function getAllDocuments(collectionName) {
    try {
      // get all the documents in given collection
      const collectionData = await getDocs(collection(db, collectionName));

      // iterate through each of the document and add them to the allPatientData state
      if (collectionName === "patients") {
        // reset the allPatientData state
        setAllPatientData([]);
        collectionData.forEach((doc) => {
          setAllPatientData((prev) => {
            return [...prev, doc.data()];
          });
          console.log(doc.data());
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // get all the patients of the given doctor
  async function getAllPatientsOf(docId) {
    try {
      // query all the patients whose doctors array contains the given docId
      const q = query(
        collection(db, "patients"),
        where("doctors", "array-contains", docId)
      );

      // store the result in a const
      const querySnapshot = await getDocs(q);

      // reset patient data state
      setPatientData([]);

      // iterate through each of the array elements and add them to the patientData state
      querySnapshot.forEach((doc) => {
        setPatientData((prev) => {
          return [...prev, doc.data()];
        });

        console.log(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getSubCollection(collectionName, docId, subCollectionName) {
    const itemRef = doc(db, collectionName, docId);
    const collectionRef = collection(itemRef, subCollectionName);
    const subCollectionData = await getDocs(collectionRef);
    if (collectionName === "patients" && subCollectionName == "checkups") {
      setCheckups([]);
      subCollectionData.forEach((docu) => {
        setCheckups((prev) => [...prev, docu.data()]);
        console.log(docu.data());
      });
    }
  }

  // to add doctorId reference to the patient
  async function addPatientTo(doctorId, patientId) {
    try {
      // get the document reference using the collection name and doc id
      const patientRef = doc(db, "patients", patientId);

      // update document by adding the new doctorId in the doctors array
      await updateDoc(docRef, {
        doctors: arrayUnion(doctorId),
      });
    } catch (e) {
      console.log(e);
    }
  }

  // to delete doctorId reference to the patient
  async function deletePatientfrom(doctorId, patientId) {
    try {
      // get the document reference using the collection name and doc id
      const docRef = doc(db, "patients", patientId);

      // update document by deleting the doctorId from the doctors array
      await updateDoc(docRef, {
        doctors: arrayRemove(doctorId),
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <FirebaseContext.Provider
      value={{
        // Pass the functions created to be used globally

        getAllDocuments,
        getAllPatientsOf,
        addPatientTo,
        deletePatientfrom,
        patientData,
        patientDetail,
        getSubCollection,
        checkups,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
