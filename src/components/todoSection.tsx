import { useEffect, useState } from "react";
import {
  toggleThemeToDarkIcon,
  toggleThemeToLightIcon,
} from "../constants/imageImport";
import { ToggleTheme } from "../contexts/ThemeContext";
import { ThemeEnum } from "../models/themeEnum";
import { useAppDispatch, useAppSelector } from "../store/applicationStore";
import styles from "../styles/ToDoSection.module.css";
import ToDoAddedInput from "./ToDoAddedInput";
import TodoList from "./todoList";
import ToDoListFooter from "./toDoListFooter";
import ToDoListFooterForMobile from "./ToDoListFooterForMobile";

function ToDoSection() {
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
  const dispatch = useAppDispatch();
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h2>ToDo</h2>
        <button
          className={styles.button}
          onClick={() => dispatch(ToggleTheme())}
        >
          <img
            src={
              theme == ThemeEnum.Dark
                ? toggleThemeToLightIcon
                : toggleThemeToDarkIcon
            }
            alt=""
          />
        </button>
      </header>
      <main className={styles.container}>
        <ToDoAddedInput />
        <TodoList />

        {customInnerWidth > 600 ? (
          <ToDoListFooter />
        ) : (
          <ToDoListFooterForMobile />
        )}
      </main>
    </div>
  );
}

export default ToDoSection;
