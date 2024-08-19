import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Game {
  id: number;
  title: string;
  iconURL: string;
  banner: string;
  rating: number;
  description: string;
  isFavorite?: boolean;
}

interface GameState {
  games: Game[];
  selectedGame: Game | null; 
  loading: boolean;
  error: string | null;
}

const initialState: GameState = {
  games: [],
  selectedGame: null, 
  loading: false,
  error: null,
};

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    fetchGamesRequest(state) {
      state.loading = true;
    },
    fetchGamesSuccess(state, action: PayloadAction<Game[]>) {
      state.games = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchGamesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchGameDetailsRequest(state, action: PayloadAction<number>) {
      state.loading = true;
    },
    fetchGameDetailsSuccess(state, action: PayloadAction<Game>) {
      state.selectedGame = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchGameDetailsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<number>) {
      const index = state.games.findIndex((game) => game.id === action.payload);
      if (index !== -1) {
        state.games[index].isFavorite = !state.games[index].isFavorite;
      }
    },
  },
});

export const {
  fetchGamesRequest,
  fetchGamesSuccess,
  fetchGamesFailure,
  toggleFavorite,
} = gameSlice.actions;

export default gameSlice.reducer;
