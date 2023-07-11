"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <>
      <button
        onClick={() => signOut({ callbackUrl: "/auth" })}
        className="bg-white text-zinc-800 rounded-md w-full h-10"
      >
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
