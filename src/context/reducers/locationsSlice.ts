import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../interfaces/interfaces';
¿
interface LocationState {
  locations: Location[];
  loading: boolean;
  error: string | null;
}

const initialState: LocationState = {
  locations: [],
  loading: false,
  error: null,
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    fetchLocationsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchLocationsSuccess(state, action: PayloadAction<Location[]>) {
      state.locations = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchLocationsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add more reducers for editing and deleting locations if needed
  },
});

export const {
  fetchLocationsStart,
  fetchLocationsSuccess,
  fetchLocationsFailure,
} = locationsSlice.actions;

export default locationsSlice.reducer;