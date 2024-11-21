import React from 'react';
import styles from './page.module.css';
import Image from "next/image";

const BlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>
                        Description
                    </p>
                    <div className={styles.author}>
                        <Image
                            src="https://images.pexels.com/photos/17485350/pexels-photo-17485350/free-photo-of-laptop-z-otwartym-edytorem-graficznym-szablonu-sklepu-internetowego-shoper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>Test username</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/17485350/pexels-photo-17485350/free-photo-of-laptop-z-otwartym-edytorem-graficznym-szablonu-sklepu-internetowego-shoper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Test Content
                </p>
            </div>
        </div>
    );
};

export default BlogPost;
