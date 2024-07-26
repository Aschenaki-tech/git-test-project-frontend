import axios from 'axios';

const API_URL = 'http://localhost:5000/api/songs/'; // Adjust the URL as needed

export const apiFetchSongs = () => axios.get(`${API_URL}`);
export const apiGetSongById = (id) => axios.get(`${API_URL}${id}/`);
export const apiAddSong = (song) => axios.post(`${API_URL}`, song);
export const apiUpdateSong = (id, song) => axios.put(`${API_URL}${id}/`, song);
export const apiDeleteSong = (id) => axios.delete(`${API_URL}${id}/`);
export const apiFetchSongsByLanguage = (language) => axios.get(`${API_URL}by_language/?language=${language}`);
export const apiFetchSongsByGenre = (genre) => axios.get(`${API_URL}by_genre/?genre=${genre}`);
export const apiFetchLanguages = () => axios.get(`${API_URL}languages/`); // Add this line
export const apiFetchGenres = () => axios.get(`${API_URL}genres/`);
export const apiFetchArtists = () => axios.get(`${API_URL}artists/`); // Add this line
export const apiFetchSongsByArtist = (artist) => axios.get(`${API_URL}by_artist/?artist=${artist}`); // Add this line