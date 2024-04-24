import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface productState {
  items: string[];
}

// Define the initial state using that type
const initialState: productState = {
  items: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { add } = productSlice.actions;
export default productSlice.reducer;
