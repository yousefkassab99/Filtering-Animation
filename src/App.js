import './App.css';
import {useEffect, useState} from "react";
import Movie from './components/Movie';
import Filter from './components/Filter';
import { motion , AnimatePresence } from "framer-motion";

function App() {

    const [popular , setPopular] = useState([]);
    const [filtered , setfiltered] = useState([]);
    const [activeGenre , setactiveGenre] = useState(0);
       



  useEffect(()=>{
     fetchPopular();
  },[])


  const fetchPopular = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9d1b1b02523ac438422bcc4938cf06bc&language=en-US');
    const movies =await data.json();
    setPopular(movies.results)
    setfiltered(movies.results)

  }
  return (
       <div className='App'>
        <Filter
         popular={popular}
          setfiltered= {setfiltered}
           activeGenre= {activeGenre}
            setactiveGenre={setactiveGenre}
             />
            
            <motion.div 
            layout 
            className='popular-movies'
            >
              <AnimatePresence>
              {filtered.map((movie) => {
             return <Movie kry={movie.id} movie={movie}/>
            })}
              </AnimatePresence>
              
             
              

            </motion.div>
       </div>
    );
}

export default App;
