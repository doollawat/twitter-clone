import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB3sYPUMRJyZGK9xOa12oC2kLThcpdE39Y',
  authDomain: 'twitter-clone-db1c5.firebaseapp.com',
  projectId: 'twitter-clone-db1c5',
  storageBucket: 'twitter-clone-db1c5.appspot.com',
  messagingSenderId: '676109642725',
  appId: '1:676109642725:web:82c5a5a840c9a0febf1d0c',
  measurementId: 'G-D3TNLGGJW9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
