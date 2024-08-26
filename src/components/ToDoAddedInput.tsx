/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/applicationStore";
import { addNewTask } from "../contexts/TasksContext";
import styles from "../styles/ToDoAddInput.module.css";
import { ThemeEnum } from "../models/themeEnum";
import classNames from "classnames";

function ToDoAddedInput() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);
  const [state, setState] = useState<{ text: string; error: string }>({
    text: "",
    error: "",
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.text.trim()) {
      dispatch(addNewTask(state.text));
      setState({ text: "", error: "" });
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className={classNames(
        styles["input-container"],
        theme == ThemeEnum.Dark ? styles.dark : styles.light
      )}
    >
      <div className={styles["radio-complete"]}></div>
      <input
        type="text"
        className={styles["input"]}
        ref={inputRef}
        placeholder="Create a new todo..."
        value={state.text}
        onChange={(e) => {
          setState({ ...state, text: e.target.value });
        }}
      />
    </form>
  );
}

export default ToDoAddedInput;
