import * as React from "react"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Badge } from "lucide-react"

export function EstudanteFormulario() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Tela de Estudantes</CardTitle>
        <CardDescription>Lista de Estudantes</CardDescription>
      </CardHeader>
      <CardContent>
      <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
            
             
                       
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Mario Sitoe</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  nmario.sitoe@gmail.com
                </div>
              </TableCell>
             
            </TableRow>
            
            
          </TableBody>
        </Table>
      
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Editar</Button>
       
      </CardFooter>
    </Card>
  )
}
