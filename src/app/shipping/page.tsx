import Image from 'next/image'
import Link from 'next/link'

export default function Notes() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className='tracking-wide'>会員登録が無事完了しました。
        ご協力ありがとうございます。
      </h3>
      <p className='bg-gray-100 font-bold text-2xl text-center leading-loose tracking-wide shadow-lg p-40 rounded-lg'>
      〒 116 - 0001 <br></br>
      東京都荒川区町屋1-17-16-101 <br></br>
      のーたん スキャンセンター 宛
      </p>

      <p className='text-center leading-loose tracking-wide'>
        注意事項 <br></br>
        書物など<u className=''>著作権のあるもの以外</u>受け付けております
      </p>

      <p className="text-white font-semibold bg-yellow-500 px-5 py-3 rounded-full"><Link href="https://www.kuronekoyamato.co.jp/ytc/customer/send/members/shuka/">クロネコヤマトの集荷を利用する</Link></p>
    </main>
  )
}