import css from "./App.module.css";
import { Images } from "../Images/Images";

const App = () => {
  return (
    <div className={css.container}>
      <Images />
    </div>
  );
};

export default App;