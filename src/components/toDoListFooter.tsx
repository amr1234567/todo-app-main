import classNames from "classnames";
import { PaginationEnum } from "../constants/enums/paginationEnum";
import { clearAllCompleted } from "../contexts/TasksContext";
import { useAppDispatch, useAppSelector } from "../store/applicationStore";
import styles from "../styles/ToDoSection.module.css";
import { changePaginationMode } from "../contexts/paginationContext";
import { ThemeEnum } from "../constants/enums/themeEnum";
function ToDoListFooter() {
  const state = useAppSelector((state) => state.Tasks);
  const { theme } = useAppSelector((state) => state.theme);
  const paginationMode = useAppSelector((state) => state.paginationMode);
  const dispatch = useAppDispatch();
  return (
    <div
      className={classNames(
        styles["todo-container-footer"],
        theme == ThemeEnum.Dark ? styles.dark : styles.light
      )}
    >
      <span className={styles["todo-length"]}>
        {state.filter((t) => !t.completed).length.toString() +
          (state.filter((t) => !t.completed).length > 1
            ? " tasks "
            : " task ")}{" "}
        left
      </span>
      <div className={styles["pagination-items"]}>
        <button
          onClick={() => dispatch(changePaginationMode(PaginationEnum.All))}
          className={
            paginationMode.PaginationMode == PaginationEnum.All
              ? classNames(
                  styles["pagination-item"],
                  styles["pagination-item-active"]
                )
              : styles["pagination-item"]
          }
        >
          {PaginationEnum.All.toString()}
        </button>
        <button
          onClick={() => dispatch(changePaginationMode(PaginationEnum.Active))}
          className={
            paginationMode.PaginationMode == PaginationEnum.Active
              ? classNames(
                  styles["pagination-item"],
                  styles["pagination-item-active"]
                )
              : styles["pagination-item"]
          }
        >
          {PaginationEnum.Active.toString()}
        </button>
        <button
          onClick={() =>
            dispatch(changePaginationMode(PaginationEnum.Completed))
          }
          className={
            paginationMode.PaginationMode == PaginationEnum.Completed
              ? classNames(
                  styles["pagination-item"],
                  styles["pagination-item-active"]
                )
              : styles["pagination-item"]
          }
        >
          {PaginationEnum.Completed.toString()}
        </button>
      </div>
      <button
        className={styles["clear-todo-s-button"]}
        onClick={() => dispatch(clearAllCompleted())}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default ToDoListFooter;
