import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Table, TableBody, TableCell,TableHead,TableHeader, TableRow,
} from "@/components/ui/table";

export default function Orders() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Pedidos</CardTitle>
        <CardDescription>Peidos recentes na tua papelaria</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden md:table-cell">Documento</TableHead>
              
            
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
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-06-25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Mario Sitoe</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  nmario.sitoe@gmail.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-06-25</TableCell>
            </TableRow>

           <TableRow>
              <TableCell>
                <div className="font-medium">Mario Sitoe</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  nmario.sitoe@gmail.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-06-25</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-medium">Mario Sitoe</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  nmario.sitoe@gmail.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-06-25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Mario Sitoe</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  nmario.sitoe@gmail.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-06-25</TableCell>
            </TableRow>
            
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
