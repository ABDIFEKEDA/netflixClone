import React, { useEffect, useState } from 'react';
import './banner.css';
import request from '../../Utils/request';
import axios from '../../Utils/axios';

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(request.fetchNetflixOriginals);
        const results = response.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        setMovie(results[randomIndex]);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button_play'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
