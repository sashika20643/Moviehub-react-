import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
//70f133e
const Api_Url="http://www.omdbapi.com/?i=tt3896198&apikey=70f133e";
const movie1 ={
   "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
   "Title": "Iron Man",
   "Type": "movie",
   "Year": "2008",
   "imdbID": "tt0371746"
}

const App =()=>{
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState([]);
const searchMovie = async (title) =>{
const response= await fetch(`${Api_Url}&s=${title}`);
const data= await response.json();
setMovies(data.Search);
}
useEffect(
    ()=>{
searchMovie('iron man');
    },[]
);
    return(
        <div className="app">
            <h1>Moviehub</h1>
            <div className="search">
                <input type="text" placeholder="Search for movie" value={searchTerm} onChange={(e)=>{
setSearchTerm(e.target.value)
                }} />
                <img src={SearchIcon} alt="search" onClick={()=>searchMovie(searchTerm)} />
            </div>
{
    movies.length>0 ?
    (
        <div className="container">
            {movies.map((movie)=>(
                <MovieCard movie1={movie}/>
            ))}

            </div>
    ):(<div>
        <h2>No movies found</h2>
    </div>)
}
    
        </div>
    )
}
export default App;