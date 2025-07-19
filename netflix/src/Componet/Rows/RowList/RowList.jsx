import React from 'react';
import Row from '../Row/Row';
import request from "../../../Utils/request";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals} // ✅ corrected here
        islargeRow={true} // ✅ optional: pass this if you want large posters
      />
      <Row
        title="Trending Now"
        fetchUrl={request.fetchTrending}  
        />
      <Row
        title="Top Rated"   
        fetchUrl={request.fetchTopRatedMovies}
      />  
      <Row
        title="Action Movies"
        fetchUrl={request.fetchActionMovies}  
      />
      <Row                  
        title="Comedy Movies"
        fetchUrl={request.fetchComedyMovies}  
      />
      <Row  
        title="Horror Movies"
        fetchUrl={request.fetchHorrorMovies}

      />
      <Row
        title="Romance Movies"
        fetchUrl={request.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        fetchUrl={request.fetchDocumentaries}
      />
      <Row
        title="Popular TV Shows"
        fetchUrl={request.fetchTvShows}
      />
      {/* Add more rows as needed */}

    </>
  );
};

export default RowList;
