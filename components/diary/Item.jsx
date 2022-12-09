import React from 'react';

function Item({ data, itemHandler }) {
  return (
    <article className="diaryitem">
      <h2> {data.title}</h2>

      {/* <hr /> */}
      <pre style={{ padding: '8px 2px' }}> {data.body}</pre>
      <div>
        <button onClick={() => itemHandler('PATCH', data)}>
          edit
        </button>
        <button onClick={() => itemHandler('DELETE', data)}>
          delete
        </button>
      </div>
    </article>
  );
}

export default Item;
