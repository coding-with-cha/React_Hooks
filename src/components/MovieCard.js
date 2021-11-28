import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import MovieList from './MovieList';
import './styleCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import Filter from "./Filter";



const MovieCard = (props) => {

    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState();
    const [description, setDescription] = useState("");
    const [posterURL, setPosterURL] = useState("");
    const [rating, setRating] = useState();
    const [listMovies, setListMovies] = useState(props.list);  
    

    const handleAdd = () => {
    setListMovies([...listMovies, {id: uuidv4(),title: title, photo: photo,description: description, posterURL: posterURL,
        rating: rating}]);
       setTitle("")
       setPhoto()
       setDescription("")
       setPosterURL("")
       setRating("")
  }

    return (
        <div className="allMovies">
            <Filter elements={listMovies}/>
            <h1 className="titleMC">Favorite movies</h1>
            <MovieList className="blocListes" elements={listMovies}/>
            <h1 className="titleAdd">Add new movie</h1>
            <Form>
                <Form.Group className="mb-3">
                <Form.Control type="Title" placeholder="Enter title" 
                 name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Control type="Image link" placeholder="Enter image link" 
                 name="photo" value={photo} onChange={(e)=>setPhoto(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3}  placeholder="Enter a description"
                 name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Control type="URL" placeholder="Enter URL" 
                name="posterURL" value={posterURL} onChange={(e)=>setPosterURL(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Control type="rating" placeholder="Enter rating" 
                name="rating" value={rating} onChange={(e)=>setRating(e.target.value)}/>
                </Form.Group>                
                
                <Button onClick={handleAdd}>
                  Add
                </Button>
            </Form>
            
                
        </div>
       
    )
}

export default MovieCard
