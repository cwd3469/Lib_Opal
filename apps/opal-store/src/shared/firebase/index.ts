// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase 프로젝트 설정 정보 (Firebase 콘솔에서 확인 가능)
const firebaseConfig = {
  apiKey: "AIzaSyCOs69Hprj9KfeEAIOkOPQ4Li4o4nfyZdM",
  authDomain: "a-young-man-s-department.firebaseapp.com",
  projectId: "a-young-man-s-department",
  storageBucket: "a-young-man-s-department.firebasestorage.app",
  messagingSenderId: "674489159819",
  appId: "1:674489159819:web:d234af43f6a48e32ad048e",
  measurementId: "G-2CSKVY0LS0",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {
  db,
  auth,
  storage,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
};
