import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBRu4lW2FZdZAFLevVimPxbadcN13NSJag',
  authDomain: 'slack-clone-a74c3.firebaseapp.com',
  databaseURL: 'https://slack-clone-a74c3.firebaseio.com',
  projectId: 'slack-clone-a74c3',
  storageBucket: 'slack-clone-a74c3.appspot.com',
  messagingSenderId: '514869626825',
  appId: '1:514869626825:web:b95d709e4fb350fe394a18',
  measurementId: 'G-3XRR4MFGJJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
