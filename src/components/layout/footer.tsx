import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="h-12 flex justify-center items-center bg-gradient-to-r from-teal-400 to-blue-500">
      <span className="text-white">
        coding by duck, used by JSONPlaceholder
      </span>
    </footer>
  );
};
