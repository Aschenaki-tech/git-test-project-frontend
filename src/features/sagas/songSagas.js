import { call, put, takeEvery } from 'redux-saga/effects';
import {
  apiFetchSongs, apiFetchSongsByLanguage, apiFetchSongsByGenre,
  apiAddSong, apiUpdateSong, apiDeleteSong, apiFetchSongsByArtist
} from '../api/songApi';
import {
  fetchSongs, fetchSongsByLanguage, fetchSongsByGenre, fetchSongsByArtist, fetchArtists,
  addSong, updateSong, deleteSong,
  setSongs, setSongsByLanguage, setSongsByGenre
} from '../redux/songsSlice';

function* fetchSongsSaga() {
  try {
    const response = yield call(apiFetchSongs);
    yield put(setSongs(response.data));
  } catch (error) {
    console.error('Error fetching songs:', error);
  }
}

function* fetchSongsByLanguageSaga(action) {
  try {
    const response = yield call(apiFetchSongsByLanguage, action.payload);
    yield put(setSongsByLanguage(response.data));
  } catch (error) {
    console.error('Error fetching songs by language:', error);
  }
}

function* fetchSongsByGenreSaga(action) {
  try {
    const response = yield call(apiFetchSongsByGenre, action.payload);
    yield put(setSongsByGenre(response.data));
  } catch (error) {
    console.error('Error fetching songs by genre:', error);
  }
}
function* fetchSongsByArtistSaga(action) {
  try {
    const response = yield call(apiFetchSongsByArtist, action.payload);
    yield put(setSongsByArtist(response.data));
  } catch (error) {
    console.error('Error fetching songs by genre:', error);
  }
}

function* addSongSaga(action) {
  try {
    const response = yield call(apiAddSong, action.payload);
    yield put(addSong(response.data));
  } catch (error) {
    console.error('Error adding song:', error);
  }
}

function* updateSongSaga(action) {
  try {
    const response = yield call(apiUpdateSong, action.payload.id, action.payload);
    yield put(updateSong(response.data));
  } catch (error) {
    console.error('Error updating song:', error);
  }
}

function* deleteSongSaga(action) {
  try {
    yield call(apiDeleteSong, action.payload);
    yield put(deleteSong(action.payload));
  } catch (error) {
    console.error('Error deleting song:', error);
  }
}

function* songSaga() {
  yield takeEvery(fetchSongs.type, fetchSongsSaga);
  yield takeEvery(fetchSongsByLanguage.type, fetchSongsByLanguageSaga);
  yield takeEvery(fetchSongsByGenre.type, fetchSongsByGenreSaga);
  yield takeEvery(fetchSongsByArtist.type, fetchSongsByArtistSaga);
  yield takeEvery(addSong.type, addSongSaga);
  yield takeEvery(updateSong.type, updateSongSaga);
  yield takeEvery(deleteSong.type, deleteSongSaga);
}

export default songSaga;
