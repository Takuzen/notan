import Image from 'next/image'
import Link from 'next/link'

export default function Notes() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="https://issuu.com/takuzen/docs/notebook_0_p10">
      <Image
          src="/note_sample_0.png"
          alt="Fuse Logo"
          width={382}
          height={519}
          priority
         />
         </Link>
      <Image
          src="/note_sample_1.png"
          alt="Fuse Logo"
          width={382}
          height={519}
          priority
         />
      <Image
          src="/note_sample_2.png"
          alt="Fuse Logo"
          width={382}
          height={519}
          priority
         />
    </main>
  )
}
