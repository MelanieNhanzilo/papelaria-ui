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
import { Input } from "@/components/ui/input";

export default function PrintOrders() {
  const [prints, setPrints] = useState<Print[]>([]);
  const [filteredPrints, setFilteredPrints] = useState<Print[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    PrintService.setPrints((data) => {
      setPrints(data);
      setFilteredPrints(data); 
    });
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredPrints(prints);
    } else {
      setFilteredPrints(
        prints.filter((print) =>
          print.id.toString().includes(search.trim())
        )
      );
    }
  }, [search, prints]);

  return (
    <div>
      <div>
        <Input
          placeholder="Pesquisar pelo ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-96"
          />
      </div>
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
          {filteredPrints.map((print) => {
            return <PrintLine print={print} key={print.id} />;
          })}
        </TableBody>
      </Table>
    </div>
  );
}

const PrintLine = ({ print }: { print: Print }) => {
  const [user, setUser] = useState<Pessoa | null>(null);

  useEffect(() => {
    userService.setUser(print.pessoaId, setUser);
  }, [print.pessoaId]);

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
          variant="secondary">
          Concluir
        </Button>
      </TableCell>
    </TableRow>
  );
};
