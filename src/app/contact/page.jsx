import React from 'react';
import styles from './page.module.css';
import Image from "next/image";
import Button from "@/components/Button/Button";

const Contact = () => {
    return (
        <div>
            <h1 className={styles.title}>Contact</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/stslogo.jpg"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="name" className={styles.input} />
                    <input type="text" placeholder="email" className={styles.input} />
                    <textarea
                        className={styles.textarea}
                        placeholder="message"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <Button url="#" text="Send"/>
                </form>
            </div>
        </div>
    );
};

export default Contact;
