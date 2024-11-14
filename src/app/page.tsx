import Link from "next/link"

export default function Home(){
  return(
    <div className="flex items-center justify-center h-screen w-full flex-col gap-5">
      <h1>Tela de login</h1>
      <Link href={"/dashboard"} className="text-blue-500 underline">Dashboard</Link>
    </div>
  )
}