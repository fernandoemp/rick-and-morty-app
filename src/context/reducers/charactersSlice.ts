import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../interfaces/interfaces';
¿
interface CharacterState {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

const initialState: CharacterState = {
  characters: [],
  loading: false,
  error: null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    fetchCharactersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCharactersSuccess(state, action: PayloadAction<Character[]>) {
      state.characters = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchCharactersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add more reducers for editing and deleting characters if needed
  },
});

export const {
  fetchCharactersStart,
  fetchCharactersSuccess,
  fetchCharactersFailure,
} = charactersSlice.actions;

export default charactersSlice.reducer;