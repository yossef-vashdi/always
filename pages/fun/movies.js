import React from 'react';
import FormMovie from '../../components/fun/formMovie';
import MoviesComponent from '../../components/fun/MoviesComponent';

//   {console.log('mode: ' + process.env.NODE_ENV)}
function Movies() {
  return (
    <>
      <FormMovie />
      <MoviesComponent />
    </>
  );
}

export default Movies;