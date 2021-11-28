import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import StarRatingComponent from 'react-star-rating-component';
import photoye from './yasak_elma.jpg';
import photomm from './Murder_Mystery.png'
import photoy from './you.jpg'



const MovieList = (props) => {
const elt = props.elements;

    return (
        elt.map((e)=>
        <div className="movie">
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
        </div>
        )
    )
}

export default MovieList