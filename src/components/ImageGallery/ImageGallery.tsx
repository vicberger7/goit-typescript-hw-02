import { ImageCard } from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { FC } from "react";
import { ImageData } from "../services/api";

interface ImageGalleryProps {
  images: ImageData[];
  onImageClick: (item: ImageData) => void;
}

export const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((item) => (
        <li key={item.id}>
          <div>
            <ImageCard item={item} onClick={() => onImageClick(item)} />
          </div>
        </li>
      ))}
    </ul>
  );
};
