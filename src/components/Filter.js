import React, { useState } from "react";
import MovieCard from './MovieCard'
import MovieList from "./MovieList";
import './styleFilter.css'

const Filter = (props) => {
    const elt = props.elements;

    const [rating, setRating] = useState("");

    const [listMovies, setListMovies] = useState([]);

      const handleSearch = (t) => {
          var mv = elt.filter((item)=>item.title.toUpperCase().includes(t.toUpperCase()) ) 
          setListMovies(mv)
        }
  
        const handleSearchR = () => {
            var mv = elt.filter((item)=>item.rating == rating) 
            setListMovies(mv)
            setRating("")          
          }

    return (
        <div>
            <div className="filterDiv">
                <input placeholder="Search with title..." type="text"
                       onChange={(e)=>handleSearch(e.target.value)}/>
                       
                <input placeholder="Search with rating..." type="text"
                    value={rating} name="rating"
                       onChange={(e)=>setRating(e.target.value)}/>
                <button onClick={handleSearchR}>Search</button>
            </div>
            {listMovies.length? <MovieList elements={listMovies}/> : null}
            
        </div>
    )
}

export default Filter
