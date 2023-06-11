'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

export default function Home() {
  useEffect(() => {
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

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const analytics = getAnalytics(app);

    async function testFirestoreConnection() {
      try {
        const notesCollection = collection(db, 'notes');

        // Add a test document to Firestore
        const docRef = await addDoc(notesCollection, { message: 'Test note' });

        console.log('Firestore connection is working. Document added with ID:', docRef.id);
      } catch (error) {
        console.error('Error testing Firestore connection:', error);
      }
    }

    testFirestoreConnection();

  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <p className='font-serif text-2xl font-bold'>
          Notan
        </p>
        
        <p className='font-serif text-1xl font-semibold text-gray-400'>
          <Link href="/story">開発物語</Link>
        </p>

        <p className='font-serif text-1xl font-semibold text-gray-400'>
          ログイン
        </p>

        <p className='font-serif text-1xl font-semibold text-white bg-red-500 rounded-full px-8 py-2'>
          <Link href="/send">今すぐ送る</Link>
        </p>
        
      </div>
      <div className="relative flex place-items-center text-3xl">
        <p>
          Just send your notes to us. <br></br>
          You would get them beautifully digitalized, <br></br>
          with our Seamless Notes on Paper and Screen. <br></br> <br></br>
          <Link href="/mypage"><u>Try the experience -&gt;</u></Link>
        </p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-center">
        <a
          href="/mypage"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl`}>
           
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            
          </p>
        </a>
      </div>
    </main>
  )
}