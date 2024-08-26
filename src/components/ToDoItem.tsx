import classNames from "classnames";
import { checkTodoIcon, DeleteIcon } from "../constants/imageImport";
import { removeTask, toggleTaskCompletion } from "../contexts/TasksContext";
import { Task } from "../models/task";
import { useAppDispatch } from "../store/applicationStore";
import styles from "../styles/ToDoList.module.css";
function ToDoItem({ task }: Readonly<{ task: Task }>) {
  const dispatch = useAppDispatch();
  return (
    <div className={styles["todo-item"]}>
      <div className={styles["todo-info"]}>
        <button
          className={
            task.completed
              ? classNames(
                  styles["todo-check-radio-checked"],
                  styles["todo-check-radio"]
                )
              : classNames(
                  styles["todo-check-radio"],
                  styles["todo-check-radio-default"]
                )
          }
          onClick={() => dispatch(toggleTaskCompletion(task.id))}
        >
          {task.completed ? <img src={checkTodoIcon} alt={task.title} /> : ""}
        </button>
        <div
          className={
            task.completed ? styles["todo-text-completed"] : styles["todo-text"]
          }
        >
          {task.title}
        </div>
      </div>
      <button
        className={styles["delete-todo"]}
        onClick={() => dispatch(removeTask(task.id))}
      >
        <img src={DeleteIcon} alt="delete task" />
      </button>
    </div>
  );
}

export default ToDoItem;
