import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CARDS_DATA } from "./CARD_DATA";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cardState",
  initialState: CARDS_DATA,
  reducers: {
    deleteLastCard: (state) => {
      state.pop();
    },
    deleteFirstCard: (state) => {
      state.shift();
    },
    deleteCard: (state, action) => {
      const copiedState = state.slice();
      const filteredArray = copiedState.filter(
        (card) => card.id !== action.payload
      );
      console.log(action.payload);
      return filteredArray;
    },
  },
});

export const { deleteFirstCard, deleteLastCard, deleteCard } =
  cardSlice.actions;

// CREATE STORE
export const store = configureStore({
  reducer: cardSlice.reducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
