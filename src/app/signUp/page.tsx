import SignUp from '../signUpFn'
import Link from 'next/link'

export default function Notes() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24">
      <div className="bg-white rounded-xl p-10 w-full max-w-md">
        <SignUp />
      </div>
    </main>
  )
}