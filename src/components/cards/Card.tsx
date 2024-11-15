
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface CardComponentProps{
    title ?: string
    icon ?: ReactNode
    number ?: any
}

export default function CardComponent({title, icon, number}: CardComponentProps) {
    return(
        <Card>
          <CardHeader>
            <div className='flex   items-center justify-between'>
              <CardTitle className=' text-sm text-black-600'>
                {title}
              </CardTitle>
              {icon}
            </div>
          </CardHeader>
          <CardContent>
            <p className='text-4xl font-bold'> {number}</p>
          </CardContent>
        </Card>
    )
}