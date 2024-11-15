'use client'

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Formulario() {
  const router = useRouter()
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState("")

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      router.push('/dashboard')
    } else {
      setError("Usuário ou senha incorretos!")
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">Tela de Login</CardTitle>
        <CardDescription className="flex justify-center">Insira os seus dados</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Name</Label>
              <Input 
                id="username" 
                placeholder="Name" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2 flex items-center">{error}</p>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="outline" onClick={handleLogin}>Entrar</Button>
      </CardFooter>
    </Card>
  )
}
