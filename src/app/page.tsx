import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
          <p className='font-serif text-2xl font-semibold'>
            Notan
          </p>
          
      </div>
      <div className="relative flex place-items-center text-3xl">
        <p>
          Seamless Notes <br></br> on Paper and Screen
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
            mypage{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            
          </p>
        </a>
      </div>
    </main>
  )
  
}