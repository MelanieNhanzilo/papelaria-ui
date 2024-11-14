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
              <TableHead>Estudante</TableHead>
              <TableHead className="hidden sm:table-cell">Imprissao</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Valor</TableHead>
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
                Subscription
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-06-25</TableCell>
              <TableCell className="text-right">350.00 MT</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Isha Subhash</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                 subhashisha@gmail.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Sale</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-06-26</TableCell>
              <TableCell className="text-right">450.00MT</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Maria Antonieta</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  Antonieta@gmail.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Sale</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-06-23</TableCell>
              <TableCell className="text-right">250.00 MT</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Vitilio Martins</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                 vitilio@gmail.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Sale</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-06-23</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Helton Guambe</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  gumabe@gmail.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Refund</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Declined
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-06-24</TableCell>
              <TableCell className="text-right">150.00 MT</TableCell>
            </TableRow>
            
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
