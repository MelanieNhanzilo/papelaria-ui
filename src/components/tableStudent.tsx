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
import { Input } from "@/components/ui/input";

export default function TableStudent() {
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await userService.getUsers();
      setUsers(data);
      setFilteredUsers(data);
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    const lowerCaseSearch = search.toLowerCase();
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(lowerCaseSearch)
      )
    );
  }, [search, users]);

  return (
    <div>
      <div>
        <Input
          placeholder="Pesquisar pelo nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
      </div>
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
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="font-medium">{user.name}</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {user.email}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {user.credits}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Link href={`/estudantes/${user.id}`}>Ver detalhes</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
