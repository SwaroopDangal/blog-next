import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = async ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            necessitatibus fugit ullam provident delectus nobis! Saepe
            dignissimos blanditiis atque culpa.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/9558710/pexels-photo-9558710.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>abc</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/9558710/pexels-photo-9558710.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro cum
          laboriosam enim amet. Modi voluptatum, provident reprehenderit, saepe
          ullam nam dolor libero, veritatis numquam dolorum magnam omnis eaque.
          Quis error exercitationem officiis sunt libero, perferendis illo quae,
          modi animi rerum dolorum, excepturi nostrum! Quo deserunt ipsa
          corrupti, eveniet praesentium at dolores saepe nemo eos temporibus
          obcaecati molestiae provident voluptatum. Placeat, error autem
          doloremque quis aspernatur vero sint unde cupiditate, minima, fugiat
          amet possimus distinctio velit tempora magni. Quas quam beatae cumque
          error laborum perspiciatis. Ullam molestiae autem, incidunt non atque
          animi. Aperiam eos atque necessitatibus esse quam hic tenetur aliquam
          in corrupti, dolor sequi. Omnis itaque ipsum aperiam officia, qui
          ratione natus blanditiis quo sed harum repellat similique. Temporibus
          dolore ratione obcaecati laborum, corporis adipisci debitis omnis
          itaque incidunt hic ipsum, doloribus eius. Modi porro, excepturi
          dolores dicta perspiciatis sunt nihil eligendi exercitationem unde
          veritatis rem perferendis libero ad facere illum? Inventore vero in,
          numquam rem asperiores repellendus perspiciatis sapiente aspernatur,
          laborum possimus cum accusantium minus eligendi. Eos soluta dolorem
          repellat voluptatum voluptates culpa, voluptas excepturi quam
          provident nemo, perferendis rerum architecto. Dolorum, iusto impedit
          modi tenetur exercitationem laborum nulla provident, fugiat sapiente
          rem necessitatibus maxime nihil voluptatum assumenda corrupti sint
          molestias optio quod delectus culpa fugit eveniet ut accusamus ad.
          Error maiores magni omnis quos, facere architecto sint quasi.
          Doloribus natus iure officiis rem blanditiis. Laboriosam, aspernatur
          libero mollitia error vero id eum quos officiis quam totam animi
          asperiores enim rem earum aut reprehenderit numquam quaerat accusamus
          sunt ullam praesentium excepturi eligendi. Inventore quidem aperiam
          reprehenderit eaque consequatur atque quod cupiditate corrupti
          accusamus, explicabo ullam, necessitatibus assumenda rerum facere
          commodi ipsa voluptates. Consequatur repudiandae perferendis cumque
          error labore laudantium molestias officiis similique earum modi
          voluptate ab iste nobis quam voluptatem nesciunt odit veritatis sunt
          laborum soluta, voluptatibus necessitatibus doloribus?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
