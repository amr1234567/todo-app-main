import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import ThemeContext from "../contexts/ThemeContext";
import TasksContext from "../contexts/TasksContext";
import { PaginationContext } from "../contexts/paginationContext";

export const ApplicationStore = configureStore({
  reducer: {
    paginationMode: PaginationContext.reducer,
    theme: ThemeContext,
    Tasks: TasksContext,
  },
});

export type RootState = ReturnType<typeof ApplicationStore.getState>;
export type AppStore = typeof ApplicationStore;
export type AppDispatch = typeof ApplicationStore.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
