import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';
import { autocomplete } from '@algolia/autocomplete-js';
import '@algolia/autocomplete-theme-classic';

export default function Mypage() {
  useEffect(() => {
    autocomplete({
      container: '#autocomplete',
      placeholder: 'Search for products',
      getSources() {
        return [];
      },
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-centet justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div id="autocomplete"></div>

        <Image
          src="/roam_image.png"
          alt="Roam Image"
          width={450}
          height={300}
          priority
        />

        <div className="relative flex place-items-center text-3xl">
          <p>
            <Link href="/notes">
              最近のノート
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
