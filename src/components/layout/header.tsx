import Link from "next/link";
import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="h-14 flex justify-center items-center bg-gradient-to-r from-teal-400 to-blue-500">
      <span className="text-3xl font-bold text-white">
        <Link href="/">POST</Link>
      </span>
    </header>
  );
};
