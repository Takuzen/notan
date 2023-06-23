'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

export default function Home() {
  const [note, setNote] = useState('');

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

  }, []);

  

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const handleNoteSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, 'notes'), {
        content: note,
        timestamp: new Date().toISOString(),
      });
      console.log('Note added with ID: ', docRef.id);
      setNote('');
    } catch (error) {
      console.error('Error adding note: ', error);
    }
  };
  return (
    <main className="p-8 sm:p-24">
      <div className="flex flex-col">
        <div className="flex w-full justify-between items-center">
          <p className="font-serif text-2xl font-bold">notan</p>
          <p className="hidden font-serif text-1xl font-semibold text-gray-400">
            <Link href="/">開発物語</Link>
          </p>
          <p className="hidden font-serif text-1xl font-semibold text-gray-400">
            ログイン
          </p>
          <Link href="/mypage_trial">
            <div className="pt-2 cursor-pointer">
              <Image
                className="object-contain"
                src="/library-outline.svg"
                alt="Library Logo"
                width={30}
                height={30}
                priority
              />
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-center mt-12">
          <div className="w-full text-end">
            <textarea
              className="w-full h-32 resize-none"
              placeholder="6月24日 夏至 （ベータ版）"
              value={note}
              onChange={handleNoteChange}
            />
            {/* 
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={handleNoteSubmit}
            >
              保存
            </button>
            */}
          </div>
        </div>

        <div className="text-center rounded-lg border fixed bottom-5 left-0 right-0 mx-auto w-11/12 sm:w-9/12 lg:w-7/12 xl:w-5/12 p-5 shadow-lg">
          <Link href="">
            <p className="text-md opacity-60">
              <span className="ball"></span> いま何を考えていますか?
            </p>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .ball {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #728fce;
          animation: ball-roll 4s linear infinite;
          position: relative;
          top: 5px;
          left: -20px;
        }

        @keyframes ball-roll {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(calc(100% - 1.5rem), calc(100% - 1.5rem));
            background-color: #728fce;
          }
          50% {
            transform: translate(calc(100% - 1.5rem), 0);
            background-color: #728fce;
          }
          75% {
            transform: translate(0, calc(100% - 1.5rem));
            background-color: #728fce;
          }
          100% {
            transform: translate(0, 0);
            background-color: #728fce;
          }
        }
      `}</style>
    </main>
  )
}