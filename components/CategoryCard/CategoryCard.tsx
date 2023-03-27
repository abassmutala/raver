import React from "react";
import styles from "./category_card.module.css";

type CategoryProps = {
  name: String;
  image: String;
};

const CategoryCard = ({ name, image }: CategoryProps) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryImage} style={{
        backgroundImage: `url(${image})`,
      }}>
        <div className={styles.categoryCardContent}>
          {/* <div className={styles.categoryIcon}>{icon}</div> */}
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
