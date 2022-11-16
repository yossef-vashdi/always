import React, { useState } from 'react';

function FormMovie() {
  const [post, setPost] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    const response = await fetch(
      'http://localhost:3000/api/fun/movies',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(post),
      }
    );
  };

  const handleChange = (input) => {
    console.log(input.value);
    setPost((p) => {
      return { ...p, [input.name]: input.value };
    });
  };
  return (
    <>
      <h1>Form Movie</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movieName">Name</label>
        <br />
        <input
          type="text"
          id="movieName"
          onChange={(e) => handleChange(e.target)}
          name="name"
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormMovie;
