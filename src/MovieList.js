import { Movie } from "./Movie";
import { AddMovie } from './AddMovie';
import { useEffect, useState, } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


export function MovieList() {
  const [movieList, setMovieList] = useState([]);


  const getMovies = () => {
    fetch("https://638cdc36eafd555746b0d43f.mockapi.io/movies", {
      method: "GET",
    })
    .then((data)=>data.json())
    .then((movies)=>setMovieList(movies ));

  }


// After App component is mounted
// Axios
  useEffect(() => getMovies(),[]);
 

  const deleteMovie = (id) => {
    // Delete --- Refersh the data
    fetch(`https://638cdc36eafd555746b0d43f.mockapi.io/movies/${id}`, {
      method: "DELETE",
    })
    .then((data)=>getMovies(data))
  };

  return (
   <div>
  
    <div className="movie-list">
        {/* Parent -> Child (props) */}
        {movieList.map((mv) => (
          <div key={mv.id}>
            <Movie movie={mv}  id={mv.id} 
            deleteButton={
            <IconButton 
            aria-label="delete" 
            sx={{marginLeft: "auto"}}
            color="error" 
            onClick={() => deleteMovie(mv.id)}> 
            <DeleteIcon />
            </IconButton>} />
          </div>
          
        ))}
      </div>
   </div>
  );
}


