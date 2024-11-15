import userService, { Pessoa } from "../../../../service/userService";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import CreditForm from "@/components/CreditForm";

export async function generateStaticParams() {
  const userIds: string[] = await userService.fetchAllUserIds();
  return userIds.map((id) => ({ estudanteId: id.toString() }));
}

const UserPage = async ({ params }: { params: { estudanteId: string } }) => {
  const { estudanteId } = await params;
  const user: Pessoa | null = await userService.getUser(parseInt(estudanteId));
  if (!user) {
    return notFound();
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <h1>{user?.name}</h1>
          </CardTitle>
          <CardDescription className="flex flex-row justify-between"><span>{user?.email}</span><span>Creditos: {user?.credits}</span> </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Creditos</TableHead>
                <TableHead>DownloadLink</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Data Criada
                </TableHead>
                <TableHead className="hidden sm:table-cell">Completo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user?.impressoes.map((impressao) => (
                <TableRow>
                  <TableCell>{impressao.credits}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Link href={impressao.downloadlink}>Descarregar</Link>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {impressao.credits}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {impressao.status === "DONE"
                      ? "Pedido Concluido"
                      : "Ainda em progresso"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
            <CreditForm user={user} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserPage;
