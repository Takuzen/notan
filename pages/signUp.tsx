import React from 'react'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, createUserWithEmailAndPassword, Auth, UserCredential } from 'firebase/auth';
import { getFirestore, collection, addDoc, Firestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCkqzaX5BtTGOCig_ET4JC6lnalRDCEerg",
    authDomain: "notan-aefef.firebaseapp.com",
    databaseURL: "https://notan-aefef-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "notan-aefef",
    storageBucket: "notan-aefef.appspot.com",
    messagingSenderId: "508688241479",
    appId: "1:508688241479:web:a360539232061b83243262",
    measurementId: "G-96ELDLYJZM"
};

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState<Auth | null>(null);
  const [db, setDb] = useState<Firestore | null>(null);
  const router = useRouter();

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    setAuth(auth);
    setDb(firestore);
  }, []);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (!auth || !db) {
        console.error('Firebase app not initialized');
        return;
      }

      const { user }: UserCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Save user information to Firestore
      await addDoc(collection(db, 'users'), {
        userId: user.uid,
        email: user.email,
      });

      console.log('User signed up successfully!');
      router.push('./shipping');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md">
          <input
            className="bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-600 rounded-lg px-4 py-2 mb-4 w-full"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-600 rounded-lg px-4 py-2 mb-4 w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
            type="submit">
              Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
