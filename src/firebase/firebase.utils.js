import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyDPXy3MorlLXa5W2iCqZPQvlqAZU3pNDDg",
    authDomain: "browniepoints-v4.firebaseapp.com",
    databaseURL: "https://browniepoints-v4.firebaseio.com",
    projectId: "browniepoints-v4",
    storageBucket: "browniepoints-v4.appspot.com",
    messagingSenderId: "281770903299",
    appId: "1:281770903299:web:f2b54986384a5fe91d4b36",
    measurementId: "G-D3LZV3HRK8"
    
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    // new documentRef
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //snapShot of the documentRef
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('Error creating user',error);
        }
    }
    
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
