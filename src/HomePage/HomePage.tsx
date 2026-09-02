// src/HomePage/HomePage.tsx

import { Button } from "@/components/ui/button";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a la página de inicio</h1>
      <p className="text-lg text-gray-600">Esta es la página principal de la aplicación.</p>
      <Button className={'mt-5 bg-blue-700'}>EMPEZAR A ESTUDIAR</Button>
    </div>
  )
}