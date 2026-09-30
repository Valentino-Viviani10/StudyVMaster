import { ObjetivosCard } from "./ObjetivosCard";

export const StudyRoom = () => {
  const stored = localStorage.getItem("usuario");
  const user = stored ? JSON.parse(stored) : null;

  return (
    <div className="flex w-full justify-between items-start px-6 py-1">
      <div>
        <h1 className="text-2xl font-bold">
          Hola {user?.nombreUsuario || "Usuario"}
        </h1>
      </div>

      <div>
        <ObjetivosCard />
      </div>
    </div>
  )
}