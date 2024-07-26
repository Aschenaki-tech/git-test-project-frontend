import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './app/store';
import SongList from './components/SongList';
import { fetchSongs } from './features/songsSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import styled from '@emotion/styled';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs()); // Dispatch the fetchSongs action
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/songs" element={<SongList />} />
          </Routes>
        </Content>
      <Footer />
    </Router>
  );
};

const Content = styled.main`
  flex: 1;
  padding-top: 60px;  // Adjust according to your header height
  padding-bottom: 40px;  // Adjust according to your footer height
`;
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
