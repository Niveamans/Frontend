import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID ,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
const db= getFirestore(app);


async function fetchDoc(collectionName){
        try {
            const collectionData = await getDocs(db,collectionName);
            collectionData.forEach((doc)=>{
                console.log(doc.data());
            })

        } catch (error) {
            console.log(error)
        }
}


