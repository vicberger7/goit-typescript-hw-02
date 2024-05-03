import styles from "./ImageCard.module.css";
import { FC } from "react";


interface ImageCardProps {
  item: {
    alt_description: string;
    urls: {
      regular: string;
    };
  };
  onClick: () => void;
}

export const ImageCard: FC<ImageCardProps> = ({ item: { alt_description, urls }, onClick }) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.thumb} onClick={onClick}>
        <img src={urls.regular} alt={alt_description} />
      </div>
    </div>
  );
};