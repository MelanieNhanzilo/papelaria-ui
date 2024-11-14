import { Grafico } from "@/components/features/charts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {CheckCheck, DollarSign, ShoppingBag, TrendingUp, User} from "lucide-react"
export default function () {
    return(
        <div className="className=sm: ml-14 p-4 ">
            <section className="grid grid-cols-4 gap-4"  >
            <Card>
            <CardHeader>
            <div className='flex   items-center justify-between'>
            <CardTitle className=' text-sm text-black-600'>
             Total Pedidos
            </CardTitle> 
            <ShoppingBag className=" flex items-end justify-between px-1" />
     
                   
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-4xl font-bold'> $ 12.00</p>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
         Total de pedidos <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
      </Card>

      <Card>
            <CardHeader>
            <div className='flex   items-center justify-between'>
            <CardTitle className=' text-sm text-black-600'>
             Total Aprovados
            </CardTitle> 
            <CheckCheck className=" flex items-end justify-between px-1" />
     
                   
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-4xl font-bold'> $ 12.00</p>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
         Total de Aprovados <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
      </Card>

      <Card>
            <CardHeader>
            <div className='flex   items-center justify-between'>
            <CardTitle className=' text-sm text-black-600'>
             Users
            </CardTitle> 
            <User className=" flex items-end justify-between px-1" />
     
                   
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-4xl font-bold'> $ 12.00</p>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
         Total de Users <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
      </Card>

      <Card>
            <CardHeader>
            <div className='flex   items-center justify-between'>
            <CardTitle className=' text-sm text-black-600'>
             Saldo
            </CardTitle> 
            <DollarSign className=" flex items-end justify-between px-1" />
     
                   
          </div>
        </CardHeader>
        <CardContent>
          <p className='text-4xl font-bold'> $ 12.00</p>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
         Total de dinheiro <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
      </Card>

     

      </section>

     
      <section className=" py-8 grid grid-cols-2">
      <Grafico/>
              
            </section>
        
     
            

            
        </div>
    )
}