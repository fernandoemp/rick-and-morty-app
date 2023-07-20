import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Episode } from '../../interfaces/interfaces';
¿
interface EpisodeState {
  episodes: Episode[];
  loading: boolean;
  error: string | null;
}

const initialState: EpisodeState = {
  episodes: [],
  loading: false,
  error: null,
};

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    fetchEpisodesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEpisodesSuccess(state, action: PayloadAction<Episode[]>) {
      state.episodes = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchEpisodesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add more reducers for editing and deleting episodes if needed
  },
});

export const {
  fetchEpisodesStart,
  fetchEpisodesSuccess,
  fetchEpisodesFailure,
} = episodesSlice.actions;

export default episodesSlice.reducer;