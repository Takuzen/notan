'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import { autocomplete } from '@algolia/autocomplete-js';
import '@algolia/autocomplete-theme-classic';

export default function Mypage() {
  useEffect(() => {
    const fetchData = async () => {
        try {
        
            const querySnapshot = await db.collection("users").get();

            querySnapshot.forEach((doc:any) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });

        } catch (err) {
            console.error("Error fetching data: ", err);
        }
    };
    fetchData();
}, []);

  useEffect(() => {
    autocomplete({
      container: '#autocomplete',
      placeholder: 'フルテキスト検索（まもなく、登場）',
      getSources() {
        return [];
      },
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-3 sm:p-24">
      <div className='flex flex-col w-full max-w-full'>
        <div id="autocomplete" className='shadow-lg'></div>
        <div className="flex flex-wrap mt-10 z-10 w-full items-center justify-between">
          <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
          <Image
              className='object-fill'
              src="/note_sample_0.png"
              alt="Fuse Logo"
              width={100}
              height={100}
              priority
            />
            </Link>
          <Image
              className='object-fill'
              src="/note_sample_1.png"
              alt="Fuse Logo"
              width={100}
              height={100}
              priority
            />
          <Image
            className='object-fill'
              src="/note_sample_2.png"
              alt="Fuse Logo"
              width={100}
              height={100}
              priority
            />
          <Image
            className='object-fill'
              src="/scan_sample_0.png"
              alt="Fuse Logo"
              width={100}
              height={100}
              priority
            />
          <Image
            className='object-fill'
              src="/scan_sample_1.png"
              alt="Fuse Logo"
              width={100}
              height={100}
              priority
            />
          <Image
            className='object-fill'
              src="/note_sample_3.png"
              alt="Fuse Logo"
              width={100}
              height={100}
              priority
            />
          <Image
            className='object-fill'
              src="/scan_sample_2.png"
              alt="Fuse Logo"
              width={100}
              height={100}
              priority
            />
          <Image
            className='object-fill'
              src="/note_sample_4.png"
              alt="Fuse Logo"
              width={100}
              height={100}
              priority
            />
          <Image
            className='object-fill'
              src="/note_sample_5.png"
              alt="Fuse Logo"
              width={100}
              height={100}
              priority
            />
        </div>
      </div>
    </main>
  )
}
