import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import './App.css'
import { LoginCard } from "./LogIn/LoginCard";
import Layout from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { HomePage } from "./components/HomePage";
import { useState } from "react";

function App() {
  const queryClient = new QueryClient()

  const [ user, setUser ] = useState<string | null>(() => localStorage.getItem("usuario"));

  const handleLoginSuccess = (usuario: string) => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    setUser(JSON.stringify(usuario)); // Al cambiar el estado, React re-renderiza con el nuevo valor
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LoginCard onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/home" element={
                <ProtectedRoute user={user}>
                  <HomePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
