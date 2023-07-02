import React from "react";
import Hero from "public/hero.png";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          sint, minima ducimus facilis commodi esse reiciendis eligendi aut
          corporis perspiciatis.
        </p>
        <Button url="/portfolio" text="Lorem ipsum" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
};

export default Home;
