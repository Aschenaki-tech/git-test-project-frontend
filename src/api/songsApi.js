import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

export const apiFetchSongs = () => axios.get(`${BASE_URL}songs/`);
export const apiGetSongById = (id) => axios.get(`${BASE_URL}songs/${id}/`);
export const apiAddSong = (song) => axios.post(`${BASE_URL}songs/`, song);
export const apiUpdateSong = (id, song) => axios.put(`${BASE_URL}songs/${id}/`, song);
export const apiDeleteSong = (id) => axios.delete(`${BASE_URL}songs/${id}/`);
export const apiFetchSongsByLanguage = (language) => axios.get(`${BASE_URL}songs/by_language/?language=${language}`);
export const apiFetchSongsByGenre = (genre) => axios.get(`${BASE_URL}songs/by_genre/?genre=${genre}`);
export const apiFetchLanguages = () => axios.get(`${BASE_URL}songs/languages/`);
export const apiFetchGenres = () => axios.get(`${BASE_URL}songs/genres/`);
export const apiFetchArtists = () => axios.get(`${BASE_URL}songs/artists/`);
export const apiFetchSongsByArtist = (artist) => axios.get(`${BASE_URL}songs/by_artist/?artist=${artist}`);
