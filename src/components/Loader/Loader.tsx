import  { Audio } from "react-loader-spinner"
import { FC } from "react";


interface LoaderProps {
  color: string;
  loading: boolean;
}

export const Loader: FC<LoaderProps> = () => {
  return (
    <div>
      <Audio color="#00BFFF"  />
    </div>
  );
};