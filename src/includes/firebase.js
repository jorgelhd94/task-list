import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  getDoc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBTN_CtRmCVS9gOX3L3j6mzERoAI4bVGfY',
  authDomain: 'apptest-72de6.firebaseapp.com',
  projectId: 'apptest-72de6',
  storageBucket: 'apptest-72de6.appspot.com',
  // messagingSenderId: '839100414336',
  appId: '1:839100414336:web:11671e399822f475c3e965',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const db = getFirestore();
const userCollection = collection(db, 'users');
const taskCollection = collection(db, 'tasks');

export {
  firebase,
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  userCollection,
  taskCollection,
  db,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  getDoc,
  onSnapshot,
  query,
  where,
};
