import Image from 'next/image'
import Link from 'next/link'

export default function Notes() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
      〒 116 - 0001 <br></br>
      東京都荒川区町屋1-17-16-101 <br></br>
      のーたん スキャンセンター 宛
      </p>

      <p>
        注意事項 <br></br>
        書物など著作権のあるもの以外受け付けております
      </p>

      <p className="text-yellow-500"><Link href="https://www.kuronekoyamato.co.jp/ytc/customer/send/members/shuka/">クロネコヤマトの集荷を利用する</Link></p>
    </main>
  )
}