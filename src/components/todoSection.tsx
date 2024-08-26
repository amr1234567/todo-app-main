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

function ToDoSection() {
  const { theme } = useAppSelector((state) => state.theme);
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
        <ToDoListFooter />
      </main>
    </div>
  );
}

export default ToDoSection;
