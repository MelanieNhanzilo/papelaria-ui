"use client";
import { FormEvent, useState } from "react";
import userService, { Pessoa } from "../../service/userService";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

// ... rest of your imports

export default function CreditForm({ user }: { user: Pessoa }) {
  const [credits, setCredits] = useState<number>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await userService.addCredits(user.id, credits||0);
      window.location.reload();
    } catch (error) {
      console.error("Error adding credits:", error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="credits">Adicionar Creditos</Label>
        <Input
          id="credits"
          placeholder="0000000"
          type="number"
          value={credits}
          onChange={(e) => {
            if (parseInt(e.target.value)<0)return
            setCredits(Number(e.target.value));
          }}
          min="0"
        />
      </div>
      <Button type="submit" variant="outline">
        Enviar
      </Button>
    </form>
  );
}
