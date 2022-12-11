import React, { useEffect, useState } from 'react';

function DiaryForm({ submitForm, patch }) {
  useEffect(() => {
    // console.log('patch ', patch);
    patch && setItem(patch);
    patch && setMethod('PATCH');
  }, [patch]);

  const [item, setItem] = useState({
    title: '',
    body: '',
    readOnly: false,
  });
  const [method, setMethod] = useState('POST');
  const inputControl = (e) => {
    if (e.target.name === 'readOnly') {
      setItem((prevState) => {
        return { ...prevState, [e.target.name]: e.target.checked };
      });
    } else
      setItem((prevState) => {
        return { ...prevState, [e.target.name]: e.target.value };
      });
  };
  const clearForm = () => {
    setMethod('POST');
    setItem({ title: '', body: '', readOnly: false });
  };

  const submitControl = (e) => {
    e.preventDefault();
    // console.log(item);
    if (item.title.trim() === '' || item.body.trim() === '') return;
    submitForm(method, item);
    clearForm();
  };
  return (
    <section>
      <form onSubmit={submitControl}>
        <h2>{method === 'POST' ? 'Add note' : 'Edit note'}</h2>

        <label htmlFor="title">Title</label>

        <input
          type="text"
          id="title"
          name="title"
          onChange={inputControl}
          value={item.title}
        />
        <label htmlFor="body">Content</label>
        <textarea
          name="body"
          id="body"
          rows="10"
          value={item.body}
          onChange={inputControl}
        ></textarea>

        {process.env.NODE_ENV === 'development' && (
          <div>
            <label htmlFor="readOnly"> Read only </label>
            <input
              type="checkbox"
              id="readOnly"
              onChange={inputControl}
              name="readOnly"
              checked={item.readOnly}
            />
          </div>
        )}

        {method === 'POST' ? (
          <button> Create </button>
        ) : (
          <div
            style={{
              width: '100%',
              display: 'flex',
            }}
          >
            <button> Update </button>
            <button onClick={clearForm}> Cancel </button>
          </div>
        )}
      </form>
    </section>
  );
}

export default DiaryForm;
