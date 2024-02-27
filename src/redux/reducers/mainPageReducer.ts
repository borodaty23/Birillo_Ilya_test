import { createReducer, createSlice } from "@reduxjs/toolkit";
import { getProjectCards } from "../actions/index ";
import { ICard } from "../../types/ICard";

export interface ICards {
  total_count: number;
  incomplete_results: boolean;
  items: ICard[];
}

interface IInitialState {
  cards: ICards;
  page: number;
  perPage: number;
  searchValue: string;
  isLoading: boolean;
  error: undefined | string;
  isError: boolean;
  isPopupActive: boolean;
}

const initialState: IInitialState = {
  cards: {} as ICards,
  page: 1,
  perPage: 10,
  searchValue: "subject",
  isLoading: false,
  error: undefined,
  isError: false,
  isPopupActive: false,
};

export const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
    setPerPage(state, action) {
      state.perPage = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    deleteCard(state, action) {
      const id = action.payload;
      state.cards.items = state.cards.items.filter((card) => card.id !== id);
    },
    setPopupActive(state, action) {
      state.isPopupActive = action.payload;
    },
    editCard(state, action) {
      const id = action.payload.cardInfo.id;
      state.cards.items = state.cards.items.map((card) => {
        if (card.id === id) {
          card.name = action.payload.inputName;
          card.owner.login = action.payload.inputLogin;
          card.description = action.payload.inputDescription;
        }
        return card;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjectCards.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.isError = false;
      })
      .addCase(getProjectCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.isError = false;
        state.cards = action.payload;
      })
      .addCase(getProjectCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isError = true;
      });
  },
});

export default mainPageSlice.reducer;
export const {
  setPerPage,
  setPage,
  setSearchValue,
  deleteCard,
  editCard,
  setPopupActive,
} = mainPageSlice.actions;
