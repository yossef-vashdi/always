import React from 'react';
import FormMovie from '../../components/fun/formMovie';
import MoviesComponen from '../../components/fun/MoviesComponent';

//   {console.log('mode: ' + process.env.NODE_ENV)}
function Movies() {
  return (
    <>
      <FormMovie />
      <MoviesComponen />
    </>
  );
}

export default Movies;
