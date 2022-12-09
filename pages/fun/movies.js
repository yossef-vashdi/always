import React from 'react';
import FormMovie from '../../components/fun/formMovie';

import MoviesComponent from '../../components/fun/moviesComponent';

//   {console.log('mode: ' + process.env.NODE_ENV)}
function Movies() {
  return (
    <>
      <h1 style={{ backgroundColor: 'red' }}>
        This section is not yet ready, Work in progress
      </h1>
      <hr />
      <br />
      <FormMovie />
      <MoviesComponent />
    </>
  );
}

export default Movies;
