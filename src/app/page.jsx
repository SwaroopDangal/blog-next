import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your ideas into reality. We bring together talented teams from
          the global tech industry to build impactful solutions.
        </p>
        <Button url="/portfolio" text="See Our Work" />
      </div>

      <div className={styles.item}>
        <Image
          src="/hero.png"
          alt="Hero Illustration"
          className={styles.img}
          width={1000}
          height={1000}
          priority
        />
      </div>
    </div>
  );
}
