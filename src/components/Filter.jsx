import React from 'react'
import {useEffect} from "react"


function Filter({setactiveGenre ,activeGenre,setfiltered,popular}) {

  useEffect(()=>{
     if(activeGenre === 0){
      setfiltered(popular);
      return;
     }

     const filtered = popular.filter((movie)=> movie.genre_ids.includes(activeGenre));
     setfiltered(filtered);
  },[activeGenre]);


  return (
    <div className='filter-container'>
      <button className={activeGenre === 0 ? "active" : "" } onClick={()=> setactiveGenre(0)}>All</button>
      <button className={activeGenre === 35 ? "active" : "" } onClick={()=> setactiveGenre(35)}>Comedy</button>
      <button className={activeGenre === 28 ? "active" : "" } onClick={()=> setactiveGenre(28)}>Action</button>
    </div>
  )
}

export default Filter
