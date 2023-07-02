import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          fill
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <h2 className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
            incidunt?
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            dicta aut aperiam distinctio maiores libero quam unde repudiandae
            consequuntur voluptate.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            dicta aut aperiam distinctio maiores libero quam unde repudiandae
            consequuntur voluptate.
          </p>
          <ul style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
          <div className="mt-5">
            <Button url="/contact" text="Contact us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
