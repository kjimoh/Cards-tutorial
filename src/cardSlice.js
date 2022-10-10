import { createSlice } from "@reduxjs/toolkit";
import { CARDS_DATA } from "./CARD_DATA";

const initialState = CARDS_DATA;

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    deleteFirstCard: (state) => {
      state.shift();
    },
    deleteCard: (state, action) => {
      const filteredData = state.filter((card) => card.id !== action.payload);
      return filteredData;
    },
    createCard: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { deleteFirstCard, deleteCard, createCard } = cardSlice.actions;

export default cardSlice.reducer;
