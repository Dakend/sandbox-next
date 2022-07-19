import React, { FC, ReactNode } from "react";
import { Footer } from "src/components/layout/footer";
import { Header } from "src/components/layout/header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="h-screen w-2/4 m-auto flex flex-col border">
      <Header />
      <main className="flex-grow flex p-4 bg-slate-50">
        <div className="w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
