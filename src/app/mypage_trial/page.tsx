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
      placeholder: 'GPT検索（まもなく、登場）',
      getSources() {
        return [];
      },
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-3 sm:p-24">
      <div className='flex flex-col w-full max-w-full'>
        <div id="autocomplete" className='shadow-lg'></div>
        <div className="flex mt-10 z-10 w-full">
          <div className='flex flex-wrap justify-between gap-x-5 gap-y-8'>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
            <Image
                className='object-fit'
                src="/note_sample_0.png"
                alt="Fuse Logo"
                width={100}
                height={100}
                priority
              />
              </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                  className='object-fit'
                  src="/note_sample_1.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_2.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/scan_sample_0.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/scan_sample_1.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_3.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/scan_sample_2.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_4.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_5.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/scan_sample_3.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/scan_sample_4.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/scan_sample_5.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/scan_sample_6.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/scan_sample_7.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_6.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_7.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_8.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_10.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_11.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_12.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_13.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_14.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_15.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_16.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
            <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
              <Image
                className='object-fit'
                  src="/note_sample_17.png"
                  alt="Fuse Logo"
                  width={100}
                  height={100}
                  priority
                />
            </Link>
          </div>
          {/* 最後の行だけ左詰にしたい */}       
        </div>
      </div>
    </main>
  )
}