import React, { useState } from "react";
import StarRatingComponent from 'react-star-rating-component';
import {Link} from "react-router-dom";



const MovieList = (props) => {
const elt = props.elements;

    return (
        elt.map((e)=>
    <div className="movie">
    <Link to={`/Description/${e.title}`} state={{id:e.id}} className="lien">
       <div className="listes">
        <h1 className="title">{e.title}</h1>
        <img src={e.imageMovie}/>
        <p className="description">{e.description}</p>
        <p  className="url"><a href={e.posterURL}>{e.posterURL}</a></p>
        <StarRatingComponent 
        name="ReactStars" 
        starCount={5}
        value={e.rating}
        activeColor="#ffd700"
        editing={false}
        />
       </div>
    </Link>
    </div>
    )       
    )
}

export default MovieList
