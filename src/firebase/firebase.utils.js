// pull in firebase/app's utility library
// 不需將所有的firebase library都帶入
import firebase from 'firebase/app';

// for database
import 'firebase/firestore'; // 這裡的firebase是從第一行承接來的
// for auth
import 'firebase/auth'

// The config object is how firebase knows that your application is connected to your firebase account and database!
const config = {
  apiKey: "AIzaSyCktWJ91poEtx5nJRlnYycJo1y0gixVcEc",
  authDomain: "ecommerce-db-55bf8.firebaseapp.com",
  projectId: "ecommerce-db-55bf8",
  storageBucket: "ecommerce-db-55bf8.appspot.com",
  messagingSenderId: "488247359475",
  appId: "1:488247359475:web:8e88d39e448e3219988486",
  measurementId: "G-9PT2XNX1XQ"
};

firebase.initializeApp(config);

// to store user data
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // to determine if we store this user object, if not, store it
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Start a sign in process for an unauthenticated user.
// Set up the google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// 每次認證或登入的時候，就trigger google pop up
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
