// src/HomePage/HomePage.tsx

import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Card } from "@/components/ui/card";

export const HomePage = () => {
  return (
      <div className="flex flex-1 items-center justify-center">
        <Card className="bg-card px-8 py-12 rounded-lg shadow-md text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a StudyVMaster!</h1>
          <p className="text-lg text-muted-foreground">Estudiá con foco y lográ tus objetivos.</p>
          <Link to="/study-room">
            <Button type="button" className={'cursor-pointer mt-5 bg-primary hover:bg-primary/80'}>EMPEZAR A ESTUDIAR</Button>
          </Link>
        </Card>
      </div>
  )
}