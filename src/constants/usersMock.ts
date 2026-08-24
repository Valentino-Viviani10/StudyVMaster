export interface User {
  id: number,
  nombreUsuario: string,
  contraseña: string,
}

export const usersMock: User[] = [
  {
    id: 1,
    nombreUsuario: "ValentinoViviani",
    contraseña: "1010",
  }
]