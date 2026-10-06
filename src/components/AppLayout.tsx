// src/components/AppLayout.tsx

import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Outlet />
    </div>
  )
}