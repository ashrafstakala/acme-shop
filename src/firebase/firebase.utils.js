import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDeW2GRLDv6skIGCIRe5HEbwRLah73Uo5c',
  authDomain: 'acme-shop-1e284.firebaseapp.com',
  projectId: 'acme-shop-1e284',
  storageBucket: 'acme-shop-1e284.appspot.com',
  messagingSenderId: '231025911058',
  appId: '1:231025911058:web:8944b2561920576ba87fcb',
  measurementId: 'G-8JQ2N4DKHG',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prmopt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;