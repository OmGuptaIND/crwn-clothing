import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCSAWhTe7eItFXGq6wDCuKQSd79D9gFuQ4",
  authDomain: "crwn-clothing-e0543.firebaseapp.com",
  projectId: "crwn-clothing-e0543",
  storageBucket: "crwn-clothing-e0543.appspot.com",
  messagingSenderId: "258379719120",
  appId: "1:258379719120:web:325f914d7867fcdd7e19d5",
  measurementId: "G-MMQDV2NK6C",
};


export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
        }).catch(err => alert(`Error Occured : ${err.message}`));
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

