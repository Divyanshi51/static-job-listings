import { createSlice } from "@reduxjs/toolkit";

const filterArray = createSlice({
  name: "filterArray",
  initialState: {
    filterTablets: []
  },
  reducers: {
    add: (state, action) => {
      state.filterTablets.push(action.payload)
      const filterSet = new Set(state.filterTablets)
      state.filterTablets = [...filterSet];
    },
    clearAll: (state, action) => {
      state.filterTablets = [];
    },
    clear: (state, action) => {
      action.payload = action.payload.innerText.slice(0, -2);
      const payload = action.payload
      state.filterTablets = state.filterTablets.filter((arr) => payload !== arr)
    }
  }
})

export const { add, clearAll, clear } = filterArray.actions;
export default filterArray.reducer