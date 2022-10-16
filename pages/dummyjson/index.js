import React from 'react';
import style from '../../styles/dummyjson.module.css';

function Dummyjson(props) {
  return (
    <div className={style.class}>
      <br /> <br />
      <h1>Description is needed here, to explain, and to style it</h1>
      <h3>
        SSR (server side rendering), data fetching and rendering in
        the back-end. I sent a request to &quot
        https://dummyjson.com/posts &quot Dummy json
        <br />
        to get data and present it
      </h3>
      <br />
      <br />
      <hr />
      <div>
        {props.posts.map((item) => {
          return (
            <div key={item.id}>
              <br />
              <h2>
                <small>Post {item.id}. </small> {item.title}
              </h2>
              <br />
              <p>{item.body}</p>
              <br />
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dummyjson;

export async function getStaticProps() {
  const res = await fetch('https://dummyjson.com/posts?skip=0');
  const data = await res.json();
  return {
    props: { ...data },
  };
}
