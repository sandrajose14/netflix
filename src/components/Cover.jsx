import React, { useEffect, useState } from 'react'
import './Cover.css'
import instance from '../instance';
function Cover({fetchUrl}) {
  console.log(fetchUrl);
  const base_url="https://image.tmdb.org/t/p/original/";
  // to store data
  const[movie,setMovie]=useState({})
  const fetchData=async()=>{
  const response=await instance.get(fetchUrl)
  // console.log(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
  setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
  }
  console.log(movie);
  useEffect(()=>{
    fetchData()
  },[])
  return (
   <div style={{height:'450px', backgroundImage:`url(${base_url}${movie.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
    <div className="banner-details">
      <h1>{movie.name}</h1>
      <button className='btn play'>Play</button>
      <button className='more'>More Info</button>
      <p>{movie.overview?.slice(0,200)}</p>
    </div>
   </div>
  )
}

export default Cover