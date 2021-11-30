import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import MovieCard from './components/MovieCard';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import photoye from './components/yasak_elma.jpg';
import photomm from './components/Murder_Mystery.png'
import photoy from './components/you.jpg'
import {Routes, Route} from 'react-router-dom';
import Descriptions from './components/Descriptions';

function App() {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState();
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState();
  const [listMovies, setListMovies] = useState([
      {id: uuidv4(), title:"Yasak elma", imageMovie:photoye , description:"Yasak Elma is a Turkish television series created by Medyapım, starring Şevval Sam and Eda Ece. It was written by Melis Civelek and Zeynep Gür, and directed by Neslihan Yeşilyurt for 3 seasons, by Murat Öztürk in the 4th season and by Ece Erdek Koçoğlu from the 5th season", 
      posterURL:"https://www.imdb.com/title/tt8045936/", rating:4},
      {id: uuidv4(), title:"Murder Mystery", imageMovie:photomm , description:"A New York cop and his wife go on a European vacation to reinvigorate the spark in their marriage. A chance encounter leads to them being framed for the murder of an elderly billionaire.", 
      posterURL:"https://www.netflix.com/tn-fr/title/80242619", rating:5},
      {id: uuidv4(), title:"You", imageMovie:photoy , description:"A recent widower struggles to balance raising his daughter on his own, while overcoming the grief of losing his wife and keeping her memory alive.", 
      posterURL:"https://www.imdb.com/title/tt7335184/", rating:3}
    ]);  
   return (
    <div className="App">
      <MovieCard list={listMovies}/>
    </div>
  );
}

export default App;
