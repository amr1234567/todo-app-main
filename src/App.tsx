import classNames from "classnames";
import { lightDesktop, darkDesktop } from "./constants/imageImport";
import { ThemeEnum } from "./models/themeEnum";
import { useAppSelector } from "./store/applicationStore";
import styles from "./styles/App.module.css";
import ToDoSection from "./components/todoSection";

function App() {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <div
      className={classNames(
        styles.body,
        theme == ThemeEnum.Dark ? styles["body-dark"] : styles["body-light"]
      )}
    >
      <img
        src={theme == ThemeEnum.Dark ? darkDesktop : lightDesktop}
        alt=""
        className={styles["image-background"]}
      />
      <ToDoSection />
    </div>
  );
}

export default App;
