import style from "./LoadMoreButton.module.css";
import { FC } from "react";

interface LoadMoreButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export const LoadMoreButton: FC<LoadMoreButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button className={style.loadMoreButton} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};