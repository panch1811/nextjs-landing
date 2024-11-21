import React from 'react';
import styles from './page.module.css';
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.description}>Description</p>
                    <Button text="See more" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.image}
                        src="https://images.pexels.com/photos/17485350/pexels-photo-17485350/free-photo-of-laptop-z-otwartym-edytorem-graficznym-szablonu-sklepu-internetowego-shoper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        fill={true}
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.description}>Description</p>
                    <Button text="See more" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.image}
                        src="https://images.pexels.com/photos/17485350/pexels-photo-17485350/free-photo-of-laptop-z-otwartym-edytorem-graficznym-szablonu-sklepu-internetowego-shoper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        fill={true}
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.description}>Description</p>
                    <Button text="See more" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.image}
                        src="https://images.pexels.com/photos/17485350/pexels-photo-17485350/free-photo-of-laptop-z-otwartym-edytorem-graficznym-szablonu-sklepu-internetowego-shoper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        fill={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Category;
