"use client";

import { useEffect, useState } from "react";
import PrintService, { Print } from "../../../service/printService";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import userService, { Pessoa } from "../../../service/userService";
import { Button } from "../ui/button";
import printService from "../../../service/printService";

export default function PrintOrders() {
  const [prints, setPrints] = useState<Print[]>([]);

  useEffect(() => {
    PrintService.setPrints(setPrints);
  }, [setPrints]);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User ID</TableHead>
          <TableHead>Documento</TableHead>
          <TableHead className="hidden sm:table-cell">Status</TableHead>
          <TableHead>Completar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {prints.map((print) => {
          return <PrintLine print={print} key={print.id} />;
        })}
      </TableBody>
    </Table>
  );
}

const PrintLine = ({ print }: { print: Print }) => {
  const [user, setUser] = useState<Pessoa | null>(null);
  useEffect(() => {
    userService.setUser(print.pessoaId, setUser);
  }, []);
  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">{print.id}</div>
        <div className="hidden text-sm text-muted-foreground md:inline">
          {user?.name}
        </div>
      </TableCell>
      <TableCell>
        <Link href={print.downloadlink}>Descarregar</Link>
      </TableCell>
      <TableCell className="hidden sm:table-cell">{print.status}</TableCell>

      <TableCell className="hidden sm:table-cell">
        <Button
          onClick={async () => {
            await printService.concludePrint(print.id);
            window.location.reload();
          }}
          variant="secondary"
        >
          Concluir
        </Button>
      </TableCell>
    </TableRow>
  );
};
