import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARbqvkK2WVs4Jdj6Hr8EfS9ocAcEz6sDE",
  authDomain: "ehealth-record-01.firebaseapp.com",
  projectId: "ehealth-record-01",
  storageBucket: "ehealth-record-01.appspot.com",
  messagingSenderId: "266132758410",
  appId: "1:266132758410:web:143a761f3a0b21be043273",
  measurementId: "G-0RC9Z4GGQ5"
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


