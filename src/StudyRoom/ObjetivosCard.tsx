import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { type Objetivos, objetivosDefault } from "./utils";
import { Target } from "lucide-react";


export const ObjetivosCard = () => {
  const [objetivos, setObjetivos] = useState<Objetivos[]>(objetivosDefault);

  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center">
        <ul className="grid grid-cols-2 grid-rows-2 gap-y-4 gap-x-10">
          {objetivos.map((objetivo) => (
            <li key={objetivo.id} className="flex items-center gap-2">
              <Target className="w-4 h-4" /><span>{objetivo.description}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}