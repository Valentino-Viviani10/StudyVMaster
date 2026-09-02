import { type ReactNode } from "react";

type LoginLayoutProps = {
  readonly children: ReactNode;
};

export default function LoginLayout({children}: LoginLayoutProps) {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      {children}
    </main>
  );
}