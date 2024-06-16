import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMw7C8WKCoVqjqS5e6p0mIjz2UICoFyjI",
    authDomain: "test-28615.firebaseapp.com",
    databaseURL: "https://test-28615-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-28615",
    storageBucket: "test-28615.appspot.com",
    messagingSenderId: "676847738734",
    appId: "1:676847738734:web:765c843fc9a7ab522fab7f",
    measurementId: "G-19H5CTK0MB"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }