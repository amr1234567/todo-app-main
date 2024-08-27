/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/applicationStore";
import styles from "../styles/ToDoList.module.css";
import ToDoItem from "./ToDoItem";
import { Task } from "../models/task";
import { PaginationEnum } from "../constants/enums/paginationEnum";
import { ThemeEnum } from "../constants/enums/themeEnum";
import classNames from "classnames";

function TodoList() {
  const { theme } = useAppSelector((state) => state.theme);
  const tasks = useAppSelector((state) => state.Tasks);
  const [tasksState, setTasksState] = useState<Task[]>([]);
  const { PaginationMode } = useAppSelector((state) => state.paginationMode);
  useEffect(() => {
    if (PaginationMode == PaginationEnum.Active)
      setTasksState(tasks.filter((t) => !t.completed));
    else if (PaginationMode == PaginationEnum.All) setTasksState(tasks);
    else if (PaginationMode == PaginationEnum.Completed)
      setTasksState(tasks.filter((t) => t.completed));
  }, [PaginationMode, tasks]);
  return (
    <div
      className={
        theme == ThemeEnum.Dark
          ? classNames(styles["todo-container"], styles["dark"])
          : classNames(styles["todo-container"], styles["light"])
      }
    >
      {tasksState?.map((task) => (
        <ToDoItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TodoList;
