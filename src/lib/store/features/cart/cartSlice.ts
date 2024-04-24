import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface cartState {
  items: string[];
}

// Define the initial state using that type
const initialState: cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
