import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import CounterPage from './pages/CounterPage';
import SearchPage from './pages/SearchPage';
import AssetViewPage from './pages/AssetViewPage';

import NavBar from './components/NavBar';

import './App.css';

function App() {

  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/asset/:nasa_id" element={<AssetViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
