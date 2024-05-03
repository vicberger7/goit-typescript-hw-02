import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { FC } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  urls: {
    regular: string;
  };
  alt_description: string;
}

export const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, urls, alt_description }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.modal}>
      <img src={urls.regular} alt={alt_description} />
    </Modal>
  );
};
