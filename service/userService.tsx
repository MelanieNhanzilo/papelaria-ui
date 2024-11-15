import axios from "axios";
import { Print } from "./printService";

export interface Pessoa {
  id: number;
  credits: number;
  name: string;
  email: string;
  impressoes: Print[]
}

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
      return users.reduce(
        (total: number, user: { credits: number }) => total + user.credits,
        0
      );
    } catch (error) {
      console.error("Erro ao buscar o saldo total:", error);
      return 0;
    }
  }

  async getUsers(): Promise<Pessoa[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/api/users`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      return [];
    }
  }

  async setUser(id: number, setUser: (user:Pessoa)=> void) {
    try {
      const response = await fetch(`${this.baseUrl}/api/users/${id}`);
      setUser(await response.json())
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      return null;
    }
  }

  async getUser(id: number): Promise<Pessoa|null> {
    try {
      const response = await axios.get(`${this.baseUrl}/api/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      return null;
    }
  }

  async addCredits(id: number, credits: number) {
    try {
        const formData = new FormData();
        formData.append("status", "DONE");
        formData.append("value", credits+"");
        await fetch(`${this.baseUrl}/api/users/${id}`, {
          method: "POST",
          body: formData,
        });
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  async fetchAllUserIds(): Promise<string[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/users/`);
      const users: Pessoa[] = await response.json()
      if(!users.map) return []
      const userIds: string[] = users.map(user=>{return user.id+""})
      return userIds
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      return [];
    }
  }

  
}

export default new UserService("http://localhost:8080");
