import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

const API_URL ='https://www.omdbapi.com?apikey=49b609e1';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    searchMovies("Batman");
  },[])


  const searchMovies = async(title)=>{
    const reponse = await fetch(`${API_URL}&s=${title}`);
    const data = await reponse.json();

    setMovies(data.Search);
  };

 
    return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />

        <img src={SearchIcon} 
        alt='Search' 
        onClick={()=>searchMovies(searchTerm)} />
      </div>

    {movies?.length>0 ?(
      <div className='container'>
        {movies.map((movie)=>(
          <MovieCard movie={movie}/>
    ))}
      </div>

    ):(
      <div className='empty'>
        <h2>No Movies Found</h2>
      </div>
    )}

    </div>
  );
}

export default App;
