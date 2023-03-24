import './App.css';
import { AddColor } from "./AddColor";
import { MovieList } from './MovieList';
import { AddMovie } from './AddMovie';
import { Routes, Route, Link, Navigate,useNavigate  } from "react-router-dom";
// import Stack from '@mui/material/Stack';
import { useState, } from "react";
// import { Movie } from './Movie';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { NotFound } from './NotFound';
import { Home } from './Home';
import { MovieDetails } from './MovieDetails';
import { BasicForm } from './BasicForm';
import { EditMovie } from './EditMovie';
import { MoreVert } from '@mui/icons-material';



function App() {



  const navigate = useNavigate();

  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode, 
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{minHeight: "100vh", borderRadios: "0%"}} elevation={0} >
    <div className="App">
      {/* <AddColor/> */}
      {/* <MovieList/> */}

    <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate ("/home")}>Home</Button>
          <Button color="inherit" onClick={() => navigate ("/movies")}>MovieList</Button>
          <Button color="inherit" onClick={() => navigate ("/movie-add")}>AddMovie</Button>
          <Button color="inherit" onClick={() => navigate ("/color-game")}>AddColor</Button>
        <Button 
        sx={{marginLeft: "auto"}}
        startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        color="inherit" 
        onClick={() => setMode(mode == "light" ? "dark" : "light")}>
          {mode == "light" ? "dark" : "light"} mode
        </Button>
        </Toolbar>
      </AppBar>


      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/films" element={<Navigate replace to ="/movies" />} />
        <Route path="/movies" element={<MovieList  />} />  
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/movie-add" element={<AddMovie />} />
        
        <Route path="/movies/:id" element={<MovieDetails  />} />
        <Route path="/basic-form" element={<BasicForm  />} />

        <Route path="/movies/edit/:id" element={<EditMovie />} />

        <Route path="*" element={<NotFound />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
   </Paper>
    </ThemeProvider>
  );
}


export default App;
