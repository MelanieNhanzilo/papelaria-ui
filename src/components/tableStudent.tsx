"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import userService from "../../service/userService";
import Link from "next/link";

export default function TableStudent() {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await userService.getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="hidden sm:table-cell">Credito</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="font-medium">{user.name}</div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">{user.email}</TableCell>
            <TableCell className="hidden sm:table-cell">
              {user.credits}
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Link href={`/Estudantes/${user.id}`}>Ver detalhes</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
