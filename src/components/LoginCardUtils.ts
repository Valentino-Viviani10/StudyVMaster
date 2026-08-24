import { z } from "zod";

export const loginSchema = z.object({
  nombreUsuario: z.string().min(1, { message: "El nombre de usuario es requerido" }).max(20, { message: "El nombre de usuario no puede superar los 20 caracteres" }),
  contraseña: z.string().min(1, { message: "La contraseña es requerida" }).max(20, { message: "La contraseña no puede superar los 20 caracteres" }),
});

export type LoginData = z.infer<typeof loginSchema>;