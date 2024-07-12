
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDNLdZrW7ZmNPQtuK7LtPaj3REskts2Bvw",
  authDomain: "flib-93776.firebaseapp.com",
  projectId: "flib-93776",
  storageBucket: "flib-93776.appspot.com",
  messagingSenderId: "393683352236",
  appId: "1:393683352236:web:70a1c025d31527a658bd09",
  measurementId: "G-3Z5BVWPD3R"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

const storage = getStorage(app);




export { db, storage };
