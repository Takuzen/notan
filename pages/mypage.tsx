import Image from 'next/image'
import Link from 'next/link'

export default function Mypage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <div className="relative flex place-items-center text-3xl">
        <Image
          src="/searchbar_sample.png"
          alt="Fuse Logo"
          width={1000}
          height={100}
          priority
        />
      </div>
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
