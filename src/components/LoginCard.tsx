import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { useForm, Controller } from "react-hook-form"
import { loginSchema, type LoginData } from "./LoginCardUtils"
import { zodResolver } from "@hookform/resolvers/zod"
import { usersMock } from "@/constants/usersMock"
import { useState } from "react"
import { useNavigate } from "react-router"

export const LoginCard = () => {
  const navigate = useNavigate();

  const [ authError, setAuthError ] = useState<string | null>(null);

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      nombreUsuario: "",
      contraseña: ""
    }
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: LoginData) => {
    setAuthError(null);

    const { nombreUsuario, contraseña } = data;
    const usuario = usersMock.find(user => user.nombreUsuario === nombreUsuario);

    if (usuario === undefined || usuario?.contraseña !== contraseña) {
      setAuthError("El nombre de usuario o la contraseña son incorrectos");
      return;
    }

    // Si pasa la validación, acá manejás el éxito (Redirección, etc.)
    console.log("Login exitoso", usuario);
    navigate("/home");
  }

  return (
    <Card className="flex flex-col bg-blue-50 justify-center w-90 m-auto border-2 p-6">
      <CardHeader className="text-center text-2xl font-bold">
        Iniciar Sesión
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <FieldGroup className="flex flex-col">

            <Controller 
              name="nombreUsuario"
              control={control}
              render={({ field, fieldState }) => (
                <Field className="mt-5" data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-slate-800 text-2xs">
                    Usuario
                  </FieldLabel>
                  <Input 
                    {...field}
                    placeholder="Usuario" 
                    type="text"
                    aria-invalid={fieldState.invalid}
                    className="border-slate-300 text-muted-foreground"
                  />
                  { fieldState.invalid &&
                    <FieldError>
                      {fieldState.error?.message}
                    </FieldError>
                  }
                </Field>
              )}
            />

            <Controller 
              name="contraseña"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-slate-800 text-2xs">
                    Contraseña
                  </FieldLabel>
                  <Input 
                    {...field}
                    type="password"
                    aria-invalid={fieldState.invalid}
                    className="border-slate-300 text-muted-foreground"
                  />
                  { fieldState.invalid &&
                    <FieldError>
                      {fieldState.error?.message}
                    </FieldError>
                  }
                </Field>
              )}
            />

            {authError && (
              <p className="text-sm p-2.5 rounded-lg font-normal text-destructive text-center w-full">
                {authError}
              </p>
            )}

            <Button className="mt-5 mb-5" type="submit" title="Iniciar Sesión">
              Iniciar Sesión
            </Button>
              
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}