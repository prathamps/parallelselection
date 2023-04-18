// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCHvicG23xtMMvJ7lj6_L4kDbaGJHDCpBk",
	authDomain: "parallel-selection.firebaseapp.com",
	projectId: "parallel-selection",
	storageBucket: "parallel-selection.appspot.com",
	messagingSenderId: "1002594313248",
	appId: "1:1002594313248:web:e70e5fc60d7d00a4350845",
	measurementId: "G-C5400KZHWX",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const storage = getStorage(app)

export { db }
