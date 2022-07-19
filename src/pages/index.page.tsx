import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <span className="text-3xl font-bold">
        <Link href="/posts">Go to Posts</Link>
      </span>
    </div>
  );
};

export default Home;
