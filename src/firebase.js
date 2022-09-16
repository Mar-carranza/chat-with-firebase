import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseApp = firebase.initializeApp({
    /*    apiKey: "AIzaSyAe-FBSBtoZ8QbmF__XUH8yMuwM8thku34",
        authDomain: "react-loginauth-2caee.firebaseapp.com",
        projectId: "react-loginauth-2caee",
        storageBucket: "react-loginauth-2caee.appspot.com",
        messagingSenderId: "816198891053",
        appId: "1:816198891053:web:84f1906e0239811543eaa4"*/
        apiKey: "AIzaSyD9P-IaGKmbgaRlLRxX-FU5Fxh2pjFPk_w",
        authDomain: "firechat-e3afd.firebaseapp.com",
        projectId: "firechat-e3afd",
        storageBucket: "firechat-e3afd.appspot.com",
        messagingSenderId: "207502147066",
        appId: "1:207502147066:web:bfe890c47d40ebb623b843"

      
     
      
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };