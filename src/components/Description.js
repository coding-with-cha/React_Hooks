import React from 'react'
import movies from './ListMovies'
import{useNavigate,useLocation}from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import './styleDesc.css'

const Description = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const movie = movies.find(el => location.state.id == el.id)
    return (
        <div className="desc">
             <h1>{movie.title}</h1>
             <p>{movie.description}</p>
             <iframe src={movie.trailer}
             title="YouTube video player" frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowfullscreen></iframe> 
             <button onClick={()=> navigate(-1)}>Go Back</button>
             <Outlet/> 
        </div>
    )
}            
        

export default Description
