import { Card, CardContent } from "@/components/ui/card"

const objetivos = [
  {
    
  }
]

export const StudyRoom = () => {
  const stored = localStorage.getItem("usuario");
  const user = stored ? JSON.parse(stored) : null;

  return (
    <>
      <div className="flex justify-center mt-5">
        <h1 className="text-2xl font-bold">Hola {user?.nombreUsuario || "Usuario"}</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <Card className="flex flex-col px-8 py-12 items-center justify-center">
          <CardContent>

          </CardContent>
        </Card>
      </div>
    </>
  )
}