import { createSlice } from "@reduxjs/toolkit";
import { ThemeEnum } from "../constants/enums/themeEnum";

const initialState = {
  theme: ThemeEnum.Dark,
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    ToggleTheme: (state) => {
      state.theme =
        state.theme == ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark;
    },
  },
});

export default ThemeSlice.reducer;
export const { ToggleTheme } = ThemeSlice.actions;
