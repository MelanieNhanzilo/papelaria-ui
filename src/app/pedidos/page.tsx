import PrintOrders from "@/components/features/orders"
export default function Pedidos() {
    return(
        <div className="w-full p-4 space-y-8">
            <h1 className="text-3xl">Pedidos</h1>
            <PrintOrders/>
        </div>
    )
}