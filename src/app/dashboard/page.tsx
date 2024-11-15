'use client'
import CardComponent from "@/components/cards/Card";
import { Grafico } from "@/components/features/charts";
import { CheckCheck, DollarSign, ShoppingBag, User } from "lucide-react"
import { useState, useEffect } from "react";
import printService from "../../../service/printService";
import userService from "../../../service/userService";
import PrintOrders from "@/components/features/orders";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function () {
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [approvedCount, setApprovedCount] = useState<number | null>(null);
  const [userCount, setUserCount] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState<number | null>(null);
  useEffect(() => {
    const fetchCounts = async () => {
      const total = await printService.getPrintsCount();
      const approved = await printService.getApprovedPrintsCount();
      const users = await userService.getUsersCount();
      const totalCredit = await userService.getTotalCredits();
      setTotalCount(total);
      setApprovedCount(approved);
      setUserCount(users);
      setTotalCredits(totalCredit)
    };
    fetchCounts();
  }, []);
  return (
    <div className="p-4 w-full">
      <section className="grid grid-cols-4 gap-4 w-full"  >
        <CardComponent title="Total Pedidos" icon={<ShoppingBag />} number={totalCount} />
        <CardComponent title="Total Aprovados" icon={<CheckCheck />} number={approvedCount} />
        <CardComponent title="Users" icon={<User />} number={userCount} />
        <CardComponent title="Saldo Total" icon={<DollarSign />} number={totalCredits ?? 0} />
      </section>
      <section className=" py-8 grid grid-cols-2 gap-4">
        <Grafico criados={(totalCount||1)} aprovados={(approvedCount||1)} />
        <Card>
          <CardHeader className="text-2xl font-semibold">Pedidos</CardHeader>
          <CardContent>
            <PrintOrders />
          </CardContent>
        </Card>
      </section>
    </div>
  )
}