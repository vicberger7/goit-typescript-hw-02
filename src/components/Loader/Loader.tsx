import  { BeatLoader} from "react-loader-spinner"
import { FC } from "react";


interface LoaderProps {
  color: string;
  loading: boolean;
}

export const Loader: FC<LoaderProps> = () => {
  return (
    <div>
      <BeatLoader color="#00BFFF"  />
    </div>
  );
};