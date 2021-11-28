import React, { useState } from "react";
import MovieCard from './MovieCard'
import MovieList from "./MovieList";
import './styleFilter.css'

const Filter = (props) => {
    const elt = props.elements;
    const [title, setTitle] = useState("");
    const [ratings, setRatings] = useState(0);
    const [rating, setRating] = useState(0);

    const [listMovies, setListMovies] = useState([]);

      const handleSearch = (t) => {
          var mv = elt.filter((item)=>item.title.toUpperCase().includes(t.toUpperCase()) ) 
          setListMovies(mv)
        }
  

    return (
        <div>
            <div className="filterDiv">
                <input placeholder="Search with title..." type="text"
                       onChange={(e)=>handleSearch(e.target.value)}/>
            </div>
            {listMovies.length? <MovieList elements={listMovies}/> : null}
            
        </div>
    )
}

export default Filter
