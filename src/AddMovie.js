import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => { 
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    // setMovieList([...movieList, newMovie]);

  }; 

  return (
    <div className="add-movie-form">

      <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />

      <TextField label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />

      <TextField label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />

      <TextField label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />

      <TextField label="trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} />
      
      {/* <button onClick={addMovie}>Add Movie</button> */}
      <Button variant="contained" onClick={addMovie}>Add Movie</Button>
    </div>

  );
}
