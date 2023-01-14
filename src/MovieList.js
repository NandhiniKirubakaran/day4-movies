import { Movie } from "./Movie";
import { AddMovie } from './AddMovie';
import { useEffect, useState, } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);


  const getMovies = () => {
    fetch(`${API}/movies`, {
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
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    })
    .then((data)=>getMovies(data))
  };

  const navigate = useNavigate();

  return (
   <div>
  
    <div className="movie-list">
        {/* Parent -> Child (props) */}
        {movieList.map((mv) => (
          <div key={mv._id}>
            {/* presentational component */}
            <Movie movie={mv}  id={mv._id} 
            // renderProps
            deleteButton={
            <IconButton 
            aria-label="delete" 
            sx={{marginLeft: "auto"}}
            color="error" 
            onClick={() => deleteMovie(mv._id)}> 
            <DeleteIcon />
            </IconButton>} 
            
            editButton={
              <IconButton 
              aria-label="edit" 
              sx={{marginLeft: "auto"}}
              color="secondary" 
              onClick={() => navigate(`/movies/edit/${mv._id}`)}> 
              <EditIcon />
              </IconButton>} 
            />
          </div>
          
        ))}
      </div>
   </div>
  );
}


