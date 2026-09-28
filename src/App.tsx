import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import './App.css'
import { LoginCard } from "./LogIn/LoginCard";
import LoginLayout from "./components/LoginLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { HomePage } from "./HomePage/HomePage";
import { useState } from "react";
import type { User } from "./constants/usersMock";
import { AppLayout } from "./components/AppLayout";
import { StudyRoom } from "./StudyRoom/StudyRoom";

function App() {
  const queryClient = new QueryClient()

  const [ user, setUser ] = useState<string | null>(() => localStorage.getItem("usuario"));

  const handleLoginSuccess = (usuario: User) => {
    const usuarioString = JSON.stringify(usuario);

    localStorage.setItem("usuario", usuarioString);
    setUser(usuarioString);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <LoginLayout>
                <LoginCard onLoginSuccess={handleLoginSuccess} />
              </LoginLayout>
            }
          />
          <Route element={
              <ProtectedRoute user={user}>
                <AppLayout />
              </ProtectedRoute>
            }
          >

            <Route path="/home" element={<HomePage />} />

            <Route path="/study-room" element={<StudyRoom />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
