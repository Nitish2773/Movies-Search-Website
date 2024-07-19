import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieList from './components/MovieList';

function App() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1)
  const [userInput, setUserInput] = useState("")

  const apiKey = "d9c25f09519311cb25281dbc2aa686c7";
  const url = 'https://api.themoviedb.org/3/discover/movie';
  const search = "https://api.themoviedb.org/3/search/movie";

  useEffect(() => {
    if (userInput === ""){
      fetchData()
    }
    else{
      searchQuery()
    }
    // eslint-disable-next-line
  },[page, userInput])

  const fetchData = () => {
    axios.get(`${url}?api_key=${apiKey}&page=${page}`).then((response) => {
      const result = response.data.results;
      setMovies(result)
    })
  }

  const searchQuery = () => {
    axios.get(`${search}?api_key=${apiKey}&query=${userInput}&page=${page}`).then((res) => {
      const result = res.data.results;
      setMovies(result)
    })
  }

  console.log(movies)
  console.log(page)
  console.log(userInput)

  return (
    <div className="App">
      <div className='navbar'>
        <h1 className='logo'>Movie Searcher</h1>
        <div className='input-container'>
          <input type='text' placeholder='Search Movie ...' className='input-box' onChange={(e) => setUserInput(e.target.value) } value={userInput} />
          <button className='btn'>Search</button>
        </div>
      </div>
      {movies.map((movie) => (
        <MovieList movieItem={movie} />
      ))}
      <div className='btn-container'>
        <button className='btn1'type='button' onClick={() => {
          if (page===1){
            setPage(1)
          }
          else{
            setPage(page-1)
          }
        }}>Previous</button>
        <p className='page-number'>Page: {page}</p>
        <button className='btn2'type='button' onClick={() => setPage(page+1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
