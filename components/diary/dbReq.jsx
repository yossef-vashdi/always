import { useRouter } from 'next/router';
import React from 'react';
const base_url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : 'https://always-fawn.vercel.app/';

const dbReq = async (method, item) => {
  //   console.log('db func is active', typeof window.location.origin);\
  //   console.log(process.env.NODE_ENV);
  if (method === 'POST') return await postReq(item);
  if (method === 'GET') return await getReq();
  if (method === 'DELETE') return await deleteReq(item);
  if (method === 'PATCH') return await patchReq(item);
  return [];
};

async function postReq(item) {
  //   console.log('db func is active', window.location);

  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };
  const response = await fetch(`${base_url}/api/diaryapi`, opt);
  const data = await response.json();
  return data;
}
async function getReq(item) {
  const response = await fetch(`${base_url}/api/diaryapi`);
  const data = await response.json();
  return data;
}

async function deleteReq(item) {
  const opt = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };
  const response = await fetch(`${base_url}/api/diaryapi`, opt);
  const data = await response.json();
  return data;
}

async function patchReq(item) {
  const opt = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };
  const response = await fetch(`${base_url}/api/diaryapi`, opt);
  const data = await response.json();
  return data;
}

export default dbReq;
