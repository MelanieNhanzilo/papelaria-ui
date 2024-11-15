import { EstudanteFormulario } from "@/components/features/estudantes";
import TableStudent from "@/components/tableStudent";

export default function Estudante (){
  return(
    <div className="w-full p-4">
      <h1 className="text-3xl">Estudante</h1>
        <TableStudent/>
    </div>
  )
}