// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKhMaaOzWUYTLzmiLGw-AArEy8VSmlOlE",
    authDomain: "gtreviews-13e41.firebaseapp.com",
    projectId: "gtreviews-13e41",
    storageBucket: "gtreviews-13e41.appspot.com",
    messagingSenderId: "156994096123",
    appId: "1:156994096123:web:3088a2aecbaf84fcfe995e",
    measurementId: "G-KQSXLQQRBJ"
};

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
const db = getFirestore(app);
export default db;