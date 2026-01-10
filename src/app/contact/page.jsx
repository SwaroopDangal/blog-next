import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Blogify | Contact",
  description: "Get in touch with us",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let’s Keep in Touch</h1>

      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="Contact Illustration"
            fill
            className={styles.image}
            priority
          />
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            placeholder="Your Message"
          ></textarea>
          <Button url="#" text="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
