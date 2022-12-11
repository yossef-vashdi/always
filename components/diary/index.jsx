import React, { useEffect, useState } from 'react';
import ListItems from './diaryList';
import styles from './css/index.module.css';
import DiaryForm from './diaryForm';
import dbReq from './dbReq';
import LoadingSpinner from '../loadingSpinner';

const diaryList = [];

function DiaryComponent() {
  const [list, setList] = useState([]);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const submitForm = async (method, item) => {
    setLoading(true);
    const data = await dbReq(method, item);
    setList(data);
    // console.log(data);
    setLoading(false);
  };

  const callDB = async () => {
    const data = await dbReq('GET');
    setList(data);
    setLoading(false);
    // console.log(data);
  };

  const itemHandler = async (method, item) => {
    if (method === 'PATCH') {
      setPost(() => item);
    }
    setLoading(true);
    const data = await dbReq(method, item);
    // console.log('item handler working', method, item);
    setList(data);
    setLoading(false);
  };

  useEffect(() => {
    callDB();
  }, []);
  return (
    <>
      {process.env.NODE_ENV === 'development' && (
        <h1
          style={{
            color: 'red',
            backgroundColor: 'black',
            textAlign: 'center',
            padding: '10px',
          }}
        >
          In development
        </h1>
      )}
      {loading && <LoadingSpinner />}
      <main className={styles.diaryContainer}>
        <div>
          <h1>diary Notes</h1>
          {/* <hr /> */}
          <ListItems list={list} itemHandler={itemHandler} />
        </div>
        <DiaryForm submitForm={submitForm} patch={post} />
      </main>
    </>
  );
}

export default DiaryComponent;
