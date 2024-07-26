/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSongs, fetchSongsByLanguage, fetchSongsByGenre,fetchSongsByArtist, 
 addSong, updateSong, deleteSong, fetchLanguages, fetchGenres, fetchArtists
} from '../features/songsSlice';
import styled from '@emotion/styled';

// Styled components
const Container = styled.div`
  margin: 20px;
  font-family: 'Arial', sans-serif;
`;


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  background-color: #f2f2f2;
  font-weight: bold;
  font-size: 10px;
`;

const TableCell = styled.td`
  padding: 10px;
  font-size: 8px;
  text-align: center;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 8px;

  &:hover {
    background-color: #0056b3;
  }

  &.edit {
    background-color: #28a745;

    &:hover {
      background-color: #218838;
    }
  }

  &.delete {
    background-color: #dc3545;

    &:hover {
      background-color: #c82333;
    }
  }

  &.details {
    background-color: #17a2b8;

    &:hover {
      background-color: #138496;
    }
  }
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const InputField = styled.input`
// display:flex;
// flex-direction:column;
  margin-right: 4px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 8px;
`;

const SelectField = styled.select`

  margin-right: 10px;
  margin-left: 10px;
  padding: 8px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 8px;
`;

const FilterContainer = styled.div`
  margin-bottom: .5rem;
  align-items: center;
  display: flex;
  justify-content: right;
`;

const SongList = () => {
  const dispatch = useDispatch();
  const { songs = [], artists =[], languages = [], genres = [] } = useSelector(state => state.songs);

  const [songData, setSongData] = useState({
    id: null, title: '', artist: '', album: '',
    release_date: '', language: '', genre: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [filterLanguage, setFilterLanguage] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  const [filterArtist, setFilterArtist] = useState('');

  useEffect(() => {
    dispatch(fetchSongs());
    dispatch(fetchArtists());
    dispatch(fetchLanguages());
    dispatch(fetchGenres());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData({ ...songData, [name]: value });
  };

  const handleAddSong = () => {
    if (songData.title && songData.artist) {
      const newSong = { ...songData };
      dispatch(addSong(newSong));
      setSongData({
        id: null, title: '', artist: '', album: '',
        release_date: '', language: '', genre: ''
      });
    }
  };

  const handleUpdateSong = () => {
    if (songData.id) {
      const updatedSong = { id: songData.id, song: songData };
      dispatch(updateSong(updatedSong));
      setSongData({
        id: null, title: '', artist: '', album: '',
        release_date: '', language: '', genre: ''
      });
      setIsEditing(false);
    }
  };

  const handleEditSong = (song) => {
    setSongData(song);
    setIsEditing(true);
  };

  const handleDeleteSong = (id) => {
    dispatch(deleteSong(id));
  };
  const handleFilterByArtist = () => {
    if (filterArtist) {
      dispatch(fetchSongsByArtist(filterArtist));
    }
  };
  const handleFilterByLanguage = () => {
    if (filterLanguage) {
      dispatch(fetchSongsByLanguage(filterLanguage));
    }
  };

  const handleFilterByGenre = () => {
    if (filterGenre) {
      dispatch(fetchSongsByGenre(filterGenre));
    }
  };

  const handleClearFilters = () => {
    setFilterLanguage('');
    setFilterGenre('');
    setFilterArtist('');
    dispatch(fetchSongs());
  };

  return (
    <Container>
      
      <InputContainer>
        <h3>{isEditing ? 'Edit Song' : 'Add New Song'}</h3>
        <InputField
          type="text"
          name="title"
          placeholder="Song Title"
          value={songData.title}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="artist"
          placeholder="Artist"
          value={songData.artist}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="album"
          placeholder="Album"
          value={songData.album}
          onChange={handleChange}
        />
        <InputField
          type="date"
          name="release_date"
          placeholder="Release Date"
          value={songData.release_date}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="language"
          placeholder="Language"
          value={songData.language}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="genre"
          placeholder="Genre"
          value={songData.genre}
          onChange={handleChange}
        />
        {isEditing ? (
          <Button onClick={handleUpdateSong}>Update Song</Button>
        ) : (
          <Button onClick={handleAddSong}>Add Song</Button>
        )}
      </InputContainer>
      <h3>Song List</h3>
      <FilterContainer>
        <h5>Filter Songs</h5>
        <SelectField
          value={filterArtist}
          onChange={(e) => setFilterArtist(e.target.value)}
        >
          <option value="">Select Artist</option>
          {artists.map(artist => (
            <option key={artist} value={artist}>{artist}</option>
          ))}
        </SelectField>
        <Button onClick={handleFilterByArtist}>Filter by Artist</Button>
        <SelectField
          value={filterLanguage}
          onChange={(e) => setFilterLanguage(e.target.value)}
        >
          <option value="">Select Language</option>
          {languages.map(language => (
            <option key={language} value={language}>{language}</option>
          ))}
        </SelectField>
        <Button onClick={handleFilterByLanguage}>Filter by Language</Button>
        <SelectField
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
        >
          <option value="">Select Genre</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </SelectField>
        <Button onClick={handleFilterByGenre}>Filter by Genre</Button>
        <Button onClick={handleClearFilters}>Clear Filters</Button>
      </FilterContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Title</TableHeader>
            <TableHeader>Artist</TableHeader>
            <TableHeader>Album</TableHeader>
            <TableHeader>Release Date</TableHeader>
            <TableHeader>Language</TableHeader>
            <TableHeader>Genre</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {songs.map(song => (
            <TableRow key={song.id}>
              <TableCell>{song.title}</TableCell>
              <TableCell>{song.artist}</TableCell>
              <TableCell>{song.album}</TableCell>
              <TableCell>{song.release_date}</TableCell>
              <TableCell>{song.language}</TableCell>
              <TableCell>{song.genre}</TableCell>
              <TableCell>
                <Button onClick={() => handleEditSong(song)}>Edit</Button>
                <Button onClick={() => handleDeleteSong(song.id)}>Delete</Button>
                <Button onClick={() => alert(`Details of ${song.title}`)}>Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SongList;
