import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

interface Props {
  text: string;
  url: string;
}

const Button = ({ text, url }: Props) => {
  return (
    <div className={styles.container}>
      <Link href={url} className={styles.button}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
