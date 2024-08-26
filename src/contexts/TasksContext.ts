import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../models/task";

const initialState: Task[] = []


export const TasksSlice = createSlice({
   name: "Tasks",
   initialState: initialState,
   reducers: {
      addNewTask: (state, action: PayloadAction<string>) => {
         const newTask: Task = {
            id: state.length + 1,
            completed: false,
            title: action.payload,
         }
         state.push(newTask)
      },
      toggleTaskCompletion: (state, action: PayloadAction<number>) => {
         const taskIndex = state.findIndex((task) => task.id === action.payload)
         if (taskIndex > -1) {
            state[taskIndex].completed = !state[taskIndex].completed
         }
      },
      clearAllCompleted: (state) => {
         return state.filter((task) => !task.completed)
      },
      removeTask: (state, action: PayloadAction<number>) => {
         return state.filter((task) => task.id !== action.payload)
      }
   }
})

export const { addNewTask, toggleTaskCompletion, clearAllCompleted, removeTask } = TasksSlice.actions

export default TasksSlice.reducer