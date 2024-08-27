import classNames from "classnames";
import {
  lightDesktop,
  darkDesktop,
  darkMobile,
  lightMobile,
} from "./constants/imageImport";
import { ThemeEnum } from "./models/themeEnum";
import { useAppSelector } from "./store/applicationStore";
import styles from "./styles/App.module.css";
import ToDoSection from "./components/todoSection";
import { useEffect, useState } from "react";

function App() {
  const { theme } = useAppSelector((state) => state.theme);
  const [customInnerWidth, setCustomInnerWidth] = useState(innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setCustomInnerWidth(innerWidth);
    };

    // Add event listener to the resize event
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={classNames(
        styles.body,
        theme == ThemeEnum.Dark ? styles["body-dark"] : styles["body-light"]
      )}
    >
      <img
        src={
          theme == ThemeEnum.Dark
            ? customInnerWidth > 770
              ? darkDesktop
              : darkMobile
            : customInnerWidth > 770
            ? lightDesktop
            : lightMobile
        }
        alt=""
        className={styles["image-background"]}
      />
      <ToDoSection />
    </div>
  );
}

export default App;
