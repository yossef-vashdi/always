import React, { useEffect, useState } from 'react';

function MoviesComponent() {
  const [movieList, setMovieList] = useState([]);
  const req = async () => {
    const response = await fetch(
      'http://localhost:3000/api/fun/movies'
    );
    const data = await response.json();
    setMovieList(data);
  };

  useEffect(() => {
    req();
    console.log('use effect');
  }, []);

  console.log('render');
  return (
    <>
      <h1>Movie List</h1>
      <br />
      {movieList.map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })}
    </>
  );
}

export default MoviesComponent;
