import axios from "axios";

class UserService {
    private baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getUsersCount(): Promise<number> {
        try {
            const response = await axios.get(`${this.baseUrl}/api/users`);
            return response.data.length;
        } catch (error) {
            console.error("Erro ao buscar a contagem de usuários:", error);
            return 0;
        }
    }

    async getTotalCredits(): Promise<number> {
        try {
            const response = await axios.get(`${this.baseUrl}/api/users`);
            const users = response.data;
            return users.reduce((total: number, user: { credits: number }) => total + user.credits, 0);
        } catch (error) {
            console.error("Erro ao buscar o saldo total:", error);
            return 0;
        }
    }

    async getUsers(): Promise<any[]> {
        try {
            const response = await axios.get(`${this.baseUrl}/api/users`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            return [];
        }
    }

}

export default new UserService("http://localhost:8080");
