import styles from './page.module.css';
import Hero from 'public/stslogo.jpg';
import Image from "next/image";
import Button from "@/components/Button/Button";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <h1 className={styles.title}>Creatively Inspired. Digitally Led.</h1>
            <p className={styles.desc}>
              Our greatest satisfaction comes from helping our clients’ businesses grow and succeed within a competitive marketplace.
            </p>
            <Button url="/portfolio" text="See Our Works" />
        </div>
        <div className={styles.item}>
            <Image src={Hero} alt="" className={styles.image}/>
        </div>
    </div>
  )
}
