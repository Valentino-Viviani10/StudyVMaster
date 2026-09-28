import { useState } from "react";
import { Card } from "@/components/ui/card";

type Objetivos = {
  description: string;
  completed: boolean;
}

export const ObjetivosCard = () => {
  const [objetivos, setObjetivos] = useState<Objetivos[]>([]);

  return (
    
  )
}