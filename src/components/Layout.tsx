import { type ReactNode } from "react";

type LayoutProps = {
  readonly children: ReactNode;
};

export default function Layout({children}: LayoutProps) {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      {children}
    </main>
  );
}