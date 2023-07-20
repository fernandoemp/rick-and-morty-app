import { combineReducers } from 'redux';
import locationsSlice from './locationsSlice';
import episodesSlice from './episodesSlice';
import charactersSlice from './charactersSlice';

export const rootSlice = combineReducers({
  characters: charactersSlice,
  locations: locationsSlice,
  episodes: episodesSlice,
});
