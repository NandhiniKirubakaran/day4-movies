import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useEffect, useState, } from "react";
import { API } from "./global";

export function MovieDetails() {
  const { id } = useParams();
  // const movie = movieList[id];
  // console.log(movieList, movie);
  
  const [movie, setMovie] = useState([]);

  //  After App component is mounted 
  // Axios
    useEffect(() => {
      fetch(`${API}/movies/${id}`, {
        method: "GET",
      })
      .then((data)=>data.json())
      .then((mv)=>setMovie(mv));
    }, []);

    console.log(movie);

  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  const navigate = useNavigate();

  return (
    <div>
      <iframe width="100%"
        height="800"
        src={movie.trailer}
        title="Avatar: The Way of Water | New Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className='movie-detail-container'>
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button startIcon={<KeyboardBackspaceIcon />} variant="contained" onClick={() => navigate(-1)}>BACK</Button>
      </div>
    </div>
  );
}
