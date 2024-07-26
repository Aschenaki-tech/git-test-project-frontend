import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  apiFetchSongs, apiAddSong, apiUpdateSong, apiDeleteSong, apiFetchSongsByLanguage,apiFetchSongsByArtist,
  apiFetchSongsByGenre, apiFetchLanguages, apiFetchGenres, apiFetchArtists
} from '../api/songsApi';

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await apiFetchSongs();
  return response.data;
});

export const fetchSongsByLanguage = createAsyncThunk('songs/fetchSongsByLanguage', async (language) => {
  const response = await apiFetchSongsByLanguage(language);
  return response.data;
});

export const fetchSongsByGenre = createAsyncThunk('songs/fetchSongsByGenre', async (genre) => {
  const response = await apiFetchSongsByGenre(genre);
  return response.data;
});
export const fetchSongsByArtist = createAsyncThunk('songs/fetchSongsByArtist', async (artist) => {
  const response = await apiFetchSongsByArtist(artist);
  return response.data;
});

export const fetchLanguages = createAsyncThunk('songs/fetchLanguages', async () => {
  const response = await apiFetchLanguages();
  return response.data;
});

export const fetchGenres = createAsyncThunk('songs/fetchGenres', async () => {
  const response = await apiFetchGenres();
  return response.data;
});
export const fetchArtists = createAsyncThunk('songs/fetchArtists', async () => {
  const response = await apiFetchArtists();
  return response.data;
});



export const addSong = createAsyncThunk('songs/addSong', async (song) => {
  const response = await apiAddSong(song);
  return response.data;
});

export const updateSong = createAsyncThunk('songs/updateSong', async ({ id, song }) => {
  const response = await apiUpdateSong(id, song);
  return response.data;
});

export const deleteSong = createAsyncThunk('songs/deleteSong', async (id) => {
  await apiDeleteSong(id);
  return id;
});

const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [],
    artists: [],
    languages: [],
    genres: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.songs = action.payload;
      })
      .addCase(fetchSongsByLanguage.fulfilled, (state, action) => {
        state.songs = action.payload;
      })
      .addCase(fetchSongsByGenre.fulfilled, (state, action) => {
        state.songs = action.payload;
      })
      .addCase(fetchSongsByArtist.fulfilled, (state, action) => {
        state.songs = action.payload;
      })
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.languages = action.payload;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
      .addCase(fetchArtists.fulfilled, (state, action) => {
        state.artists = action.payload;
      })
      .addCase(addSong.fulfilled, (state, action) => {
        state.songs.push(action.payload);
      })
      .addCase(updateSong.fulfilled, (state, action) => {
        const index = state.songs.findIndex(song => song.id === action.payload.id);
        state.songs[index] = action.payload;
      })
      .addCase(deleteSong.fulfilled, (state, action) => {
        state.songs = state.songs.filter(song => song.id !== action.payload);
      });
  },
});

export default songsSlice.reducer;
