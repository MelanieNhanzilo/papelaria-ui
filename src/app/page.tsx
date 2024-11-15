import { Formulario } from "@/components/features/login"
import Link from "next/link"

export default function Home(){
  return(
    <div className="flex items-center justify-center h-screen w-full flex-col gap-5">
       <Formulario/>
      <Link href={"/dashboard"} className="text-blue-500 underline">Dashboard</Link>
    </div>
  )
}