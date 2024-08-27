import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../models/task";

const initialState: Task[] = getTasksInitialState();


export const TasksSlice = createSlice({
   name: "Tasks",
   initialState: initialState,
   reducers: {
      addNewTask: (state, action: PayloadAction<string>) => {
         const newTask: Task = {
            id: 0,
            completed: false,
            title: action.payload,
         }
         if (state.length == 0)
            newTask.id = 1;
         else newTask.id = state[state.length - 1].id + 1;
         state.push(newTask)
         localStorage.setItem(`${newTask.id}|task`, `${newTask.title}|||${newTask.completed}`);
      },
      toggleTaskCompletion: (state, action: PayloadAction<number>) => {
         const taskIndex = state.findIndex((task) => task.id === action.payload)
         if (taskIndex > -1) {
            state[taskIndex].completed = !state[taskIndex].completed
            localStorage.setItem(`${state[taskIndex].id}|task`, `${state[taskIndex].title}|||${state[taskIndex].completed}`);
         }
      },
      clearAllCompleted: (state) => {
         const newState = state.filter((task) => !task.completed)
         state.forEach((task) => {
            if (task.completed) {
               localStorage.removeItem(`${task.id}|task`)
            }
         })
         return newState;
      },
      removeTask: (state, action: PayloadAction<number>) => {
         localStorage.removeItem(`${action.payload}|task`)
         return state.filter((task) => task.id !== action.payload)
      }
   }
})

export const { addNewTask, toggleTaskCompletion, clearAllCompleted, removeTask } = TasksSlice.actions

export default TasksSlice.reducer

function getTasksInitialState(): Task[] {
   const tasks: Task[] = [];
   for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.split("|")[1] === "task") {
         const taskString = localStorage.getItem(key);
         if (taskString) {
            const taskSplitter = taskString.split("|||");
            const title = taskSplitter[0];
            const completed = taskSplitter[1] === "true";
            const id = parseInt(key.split("|")[0], 10);
            tasks.push({ title, completed, id } as Task);
         }
      }
   }
   return tasks;
}