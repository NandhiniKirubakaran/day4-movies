// import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Navigate, useNavigate } from "react-router-dom";
// import { PostAdd } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global";



const movieValidationSchema = yup.object({
  name: yup.string().required(),
  poster: yup.string().required().min(4, "Need a bigger poster 😉"),
  rating: yup.number().required().min(0).max(10),
  summary: yup.string().required().min(20),
  trailer: yup.string().required().min(4).url(), 
});

export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const {handleSubmit, values, handleChange, handleBlur, touched, errors } =  
  useFormik({
  initialValues: {
    name: "",
    poster: "",
    rating: "",
    summary: "",
    trailer: "",
  },

validationSchema: movieValidationSchema,
  onSubmit: (newMovie) => {
    console.log("Form values: ", newMovie);
    addMovie(newMovie);
  },
 });


const navigate = useNavigate();
const addMovie = (newMovie) => { 
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };

    // setMovieList([...movieList, newMovie]);

    // Steps
    //  1. method - POST
    //  2. body - data & JSON (string)
    //  3. header - JSON

    // JS -> python / JAVA / PHP (string) [Dictionary]
    // JSON / XML

    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie), 
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/movies"));
  }; 

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField 
      label="Name" 
      variant="outlined" 
      value={values.name}
      name="name"
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.name && errors.name}
      helperText={touched.name && errors.name ? errors.name : null}
      // color="success"
      />
      {/* // onChange={(event) => setName(event.target.value)} /> */}

      <TextField 
      label="Poster" 
      variant="outlined"
      value={values.poster}
      name="poster"
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.poster && errors.poster}
      helperText={touched.poster && errors.poster ? errors.poster : null}
      />
      {/* // onChange={(event) => setPoster(event.target.value)} /> */}

      <TextField 
      label="Rating" 
      variant="outlined"
      value={values.rating}
      name="rating"
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.rating && errors.rating}
      helperText={touched.rating && errors.rating ? errors.rating : null}
      /> 
      {/* onChange={(event) => setRating(event.target.value)} /> */}

      <TextField 
      label="Summary" 
      variant="outlined" 
      value={values.summary}
      name="summary"
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.summary && errors.summary}
      helperText={touched.summary && errors.summary ? errors.summary : null}
      />
      {/* onChange={(event) => setSummary(event.target.value)} /> */}

      <TextField 
      label="trailer" 
      variant="outlined" 
      value={values.trailer}
      name="trailer"
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.trailer && errors.trailer}
      helperText={touched.trailer && errors.trailer ? errors.trailer : null}
      />
      {/* onChange={(event) => setTrailer(event.target.value)} /> */}
      
      {/* <button onClick={addMovie}>Add Movie</button> */}
      <Button variant="contained" type="submit">Add Movie</Button>
    </form>

  );
}
