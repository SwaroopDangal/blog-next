import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      {/* Hero Image */}
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
          alt="Creative Team"
          className={styles.img}
          priority
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award-winning digital experiences
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are a creative digital team focused on transforming ideas into
            meaningful experiences. Our passion lies in blending design,
            technology, and storytelling to craft products that truly connect
            with users.
            <br />
            <br />
            From concept to execution, we believe in thoughtful design, clean
            code, and impactful solutions that leave a lasting impression.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            • Creative Illustrations
            <br />
            <br />• Dynamic & Responsive Websites
            <br />
            <br />• Fast, Scalable Applications
            <br />
            <br />• Mobile App Development
          </p>
          <Button url="/contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
