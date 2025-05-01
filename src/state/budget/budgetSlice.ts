import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface BudgetState {
  value: number;
}

const initialState: BudgetState = {
  value: 100,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaseByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset:(state)=>{
        state.value = initialState.value;
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

export const incrementAsync = createAsyncThunk(
  "budget/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, increaseByAmount ,reset } = budgetSlice.actions;

export default budgetSlice.reducer;
