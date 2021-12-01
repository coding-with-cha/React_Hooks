import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import MovieCard from './components/MovieCard';
import Filter from './components/Filter';
import MovieList from './components/MovieList';

import Description from './components/Description';
import {Routes, Route} from "react-router-dom";
import movies from './components/ListMovies';

function App() {
  const [listMovies, setListMovies] = useState(movies);  
   
  return (
    <div className="App">
      <Routes>
        <Route exact path='/Description/:desc' element={<Description/>}></Route>
        <Route path='/' element={<><MovieCard  list={listMovies}/></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
