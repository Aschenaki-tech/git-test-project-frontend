import axios from 'axios';
// import axiosInstance from './axiosInstance';

const BASE_URL = 'http://localhost:5000/api/songs/'; // Adjust the URL as needed

const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    }
   
    export const apiFetchSongs = () => axios.get(`${BASE_URL}`);
    export const apiGetSongById = (id) => axios.get(`${BASE_URL}${id}/`);
    export const apiAddSong = (song) => axios.post(`${BASE_URL}`, song);
    export const apiUpdateSong = (id, song) => axios.put(`${BASE_URL}${id}/`, song);
    export const apiDeleteSong = (id) => axios.delete(`${BASE_URL}${id}/`);
    export const apiFetchSongsByLanguage = (language) => axios.get(`${BASE_URL}by_language/?language=${language}`);
    export const apiFetchSongsByGenre = (genre) => axios.get(`${BASE_URL}by_genre/?genre=${genre}`);
    export const apiFetchLanguages = () => axios.get(`${BASE_URL}languages/`);
    export const apiFetchGenres = () => axios.get(`${BASE_URL}genres/`);
    export const apiFetchArtists = () => axios.get(`${BASE_URL}artists/`);
    export const apiFetchSongsByArtist = (artist) => axios.get(`${BASE_URL}by_artist/?artist=${artist}`);