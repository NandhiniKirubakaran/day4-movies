import { Counter } from "./Counter";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddMovie } from './AddMovie';
import InfoIcon from '@mui/icons-material/Info';
import { Navigate, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

// Object Destructuring

export function Movie({ movie, id, deleteButton }) {
  // contional styling
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  const [show, setShow] = useState(true);
  const navigate = useNavigate();


  return (
    <Card className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}
          <IconButton color="primary"
            onClick={() => setShow(!show)} aria-label="Toggle summary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton> 
          
          <IconButton color="primary"
           onClick={() => navigate(`/movies/${id}`)}
          //  onClick={() => navigate("/movies/" + id)}
            aria-labe l="Toggle summary">
            <InfoIcon />
          </IconButton> 
          </h2>
          
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>


      {/* Conditional Rendering */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
      <Counter /> {deleteButton}
      </CardActions>
    </Card>

  );
}
