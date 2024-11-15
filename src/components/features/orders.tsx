'use client'

import { useEffect, useState } from "react";
import PrintService from "../../../service/printService";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PrintOrders() {
  const [prints, setPrints] = useState<any[]>([]);
  useEffect(() => {
    const fetchPrints = async () => {
      const data = await PrintService.getPrints();
      setPrints(data); 
    };
    fetchPrints();
  }, []);
  return (
      <Table> 
        <TableHeader>
          <TableRow>
            <TableHead>id</TableHead>
            <TableHead className="hidden sm:table-cell">Documento</TableHead>
            <TableHead className="hidden sm:table-cell">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prints.map((print) => (
            <TableRow key={print.id}>
              <TableCell>
                <div className="font-medium">{print.id}</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  {print.userEmail}
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">{print.downloadlink}</TableCell>
              <TableCell className="hidden sm:table-cell">{print.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}
