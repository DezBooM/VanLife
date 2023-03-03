import { initializeApp } from "firebase/app"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAsExy2RzYYzG7ir_tFjtZ89yAFv2827gQ",
  authDomain: "vanlife-1a85e.firebaseapp.com",
  projectId: "vanlife-1a85e",
  storageBucket: "vanlife-1a85e.appspot.com",
  messagingSenderId: "890415198790",
  appId: "1:890415198790:web:d171742e9a19044a64d047",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans")

export async function getAllVans() {
  const querySnapshot = await getDocs(vansCollectionRef)
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return dataArr
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const vanSnapshot = await getDoc(docRef)
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  }
}

export async function getAllHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"))
  const querySnapshot = await getDocs(q)
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return dataArr
}
