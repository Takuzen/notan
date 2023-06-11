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
      placeholder: 'Search across all notes',
      getSources() {
        return [];
      },
    });
  }, []);

  return (
    <main className="">
      <div className="">

        <div id="autocomplete" className='shadow w-3'></div>
        
        <div className="relative flex place-items-center text-3xl">
          <p>
            <Link href="/notes">
              ノートを見る
            </Link>
          </p>
        </div>
        
        

      </div>
    </main>
  )
}
