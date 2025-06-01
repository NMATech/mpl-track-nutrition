import { createSlice } from "@reduxjs/toolkit";

const caloriLogSlice = createSlice({
  name: "cart",
  initialState: [], // ✅ Harus array
  reducers: {
    addCalori: (state, action) => {
      state.push(action.payload);
    },
    updateCalori: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteCalori: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addCalori, updateCalori, deleteCalori } = caloriLogSlice.actions;
export default caloriLogSlice.reducer;
