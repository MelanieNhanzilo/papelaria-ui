import axios from "axios"

class PrintService {
    private baseUrl: string
    
    constructor(baseUrl: string) {
        this.baseUrl=baseUrl
    }

    async getPrintsCount(): Promise<number> {
        try{
            const response = await axios.get(`${this.baseUrl}/api/files/list`)
            return response.data.length
        }catch(error) {
            console.error("Erro ao buscar a contagem de pedidos:", error)
            throw 0
        }
    }
    
    async getApprovedPrintsCount(): Promise<number> {
        try {
            const response = await axios.get(`${this.baseUrl}/api/prints`, {
                params: { status: "NEW" }
            });
            return response.data.length;
        } catch (error) {
            console.error("Erro ao buscar a contagem de pedidos aprovados:", error);
            return 0; 
        }
    }
    async getPrints(): Promise<any[]> {
        try {
            const response = await axios.get(`${this.baseUrl}/api/prints`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar pedidos de impressão:", error);
            return [];
        }
    }
}

export default new PrintService("http://localhost:8080")    