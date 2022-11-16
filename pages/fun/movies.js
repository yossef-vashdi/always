import React from 'react';
import FormMovie from '../../components/fun/formMovie';
// import MoviesComponen from '../../components/fun/MoviesComponent';
import RandomComponent from '../../components/fun/randomComponent';

//   {console.log('mode: ' + process.env.NODE_ENV)}
function Movies() {
  return (
    <>
      <FormMovie />
      <RandomComponent />
    </>
  );
}

export default Movies;
