import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginationEnum } from "../constants/paginationEnum";

const initialState = {
   PaginationMode: PaginationEnum.All,
};

export const PaginationContext = createSlice({
   name: "paginationMode",
   initialState: initialState,
   reducers: {
      changePaginationMode: (state, action: PayloadAction<PaginationEnum>) => {
         state.PaginationMode = action.payload;
      }
   },
})


export const { changePaginationMode } = PaginationContext.actions;
export default PaginationContext.reducer;