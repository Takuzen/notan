import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className='font-serif text-2xl font-semibold'>
          Notan
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p>
            開発物語
          </p>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p>
            <Link href="/mypage">マイページ</Link>
          </p>
        </div>
      </div>

      <div className="relative flex place-items-center text-3xl">
        <p>
          あなたの筆跡を検索しよう
        </p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-center">
        <a
          href="https://shuka.kuronekoyamato.co.jp/shuka_req/TopAction_doInit.action"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl`}>
            ノートを送る{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            クロネコヤマト
          </p>
        </a>
      </div>
    </main>
  )
  
}