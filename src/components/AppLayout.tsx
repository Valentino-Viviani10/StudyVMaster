// src/components/AppLayout.tsx

import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const AppLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  )
}