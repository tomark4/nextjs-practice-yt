"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import DarkModeToggle from "../dark-mode/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const menuItems = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Jotta
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {menuItems.map((item) => (
          <Link href={item.url} key={item.id} className={styles.link}>
            {item.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button
            onClick={() =>
              signOut({ redirect: false, callbackUrl: "/dashboard/login" })
            }
            className={styles.logout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
