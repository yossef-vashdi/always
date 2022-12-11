import React from 'react';
import FormMovie from '../../components/fun/formMovie';

import MoviesComponent from '../../components/fun/moviesComponent';
import Head from 'next/head';

//   {console.log('mode: ' + process.env.NODE_ENV)}
function Movies() {
  return (
    <>
      <h1 style={{ backgroundColor: 'red' }}>
        <Head>
          <title>Movies and Series</title>
          <meta
            name="description"
            content="List of movies and series with information"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
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
