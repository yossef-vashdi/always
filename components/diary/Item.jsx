import React, { useEffect, useState } from 'react';

function Item({ data, itemHandler }) {
  const titleText = data.readOnly
    ? 'Author blocked write & delete'
    : '';

  // const [disable, setDisable] = useState(data.readOnly);
  // useEffect(() => {
  //   setDisable(data.readOnly);
  // }, [data.readOnly]);
  const disable =
    process.env.NODE_ENV === 'development' ? false : data.readOnly;
  return (
    <article className="diaryitem">
      <h2>{data.title}</h2>

      {/* <hr /> */}
      <pre style={{ padding: '8px 2px' }}> {data.body}</pre>
      <div>
        <button
          onClick={() => itemHandler('PATCH', data)}
          disabled={disable}
          title={titleText}
        >
          edit
        </button>
        <button
          onClick={() => itemHandler('DELETE', data)}
          disabled={disable}
          title={titleText}
        >
          delete
        </button>
      </div>
    </article>
  );
}

export default Item;
