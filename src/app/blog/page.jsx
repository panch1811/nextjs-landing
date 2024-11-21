import React from 'react';
import styles from './page.module.css';
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
    return (
        <div className={styles.mainContainer}>
            <Link href={"/blog/testId"} className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/17485350/pexels-photo-17485350/free-photo-of-laptop-z-otwartym-edytorem-graficznym-szablonu-sklepu-internetowego-shoper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Description</p>
                </div>
            </Link>
            <Link href={"/blog/testId"} className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/17485350/pexels-photo-17485350/free-photo-of-laptop-z-otwartym-edytorem-graficznym-szablonu-sklepu-internetowego-shoper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Description</p>
                </div>
            </Link>
            <Link href={"/blog/testId"} className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/17485350/pexels-photo-17485350/free-photo-of-laptop-z-otwartym-edytorem-graficznym-szablonu-sklepu-internetowego-shoper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Description</p>
                </div>
            </Link>
        </div>
    );
};

export default Blog;
