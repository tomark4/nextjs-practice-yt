"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import DarkModeToggle from "../dark-mode/DarkModeToggle";

const menuItems = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
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
        <button onClick={() => console.log("logout")} className={styles.logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
