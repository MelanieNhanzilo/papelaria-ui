import axios from "axios";

export interface Print {
  id: number;
  pessoaId: number;
  credits: number;
  created: string;
  complete: string;
  downloadlink: string;
  status: "CREATED" | "FAILED" | "PENDING" | "DONE";
}

class PrintService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getPrintsCount(): Promise<number> {
    try {
      const response = await axios.get(`${this.baseUrl}/api/prints`);
      return response.data.length;
    } catch (error) {
      console.error("Erro ao buscar a contagem de pedidos:", error);
      throw 0;
    }
  }

  async getApprovedPrintsCount(): Promise<number> {
    try {
      const response = await fetch(`${this.baseUrl}/api/prints`);
      const data: Print[] = await response.json();
      const filteredData = data.filter((print) => print.status === "DONE");
      return filteredData.length;
    } catch (error) {
      console.error("Erro ao buscar a contagem de pedidos aprovados:", error);
      return 0;
    }
  }

  async getPrints(): Promise<Print[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/api/prints`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar pedidos de impressão:", error);
      return [];
    }
  }
  async setPrints(setPrints: (prints: Print[]) => void) {
    try {
      const response = await fetch(`${this.baseUrl}/api/prints`);
      setPrints(await response.json());
    } catch (error) {
      console.error("Erro ao buscar pedidos de impressão:", error);
    }
  }
  async concludePrint(id: number) {
    try {
      const formData = new FormData();
      formData.append("status", "DONE");
      await fetch(`http://localhost:8080/api/prints/${id}`, {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Erro ao buscar pedidos de impressão:", error);
    }
  }
}

export default new PrintService("http://localhost:8080");
