import fs from 'fs';

export default async function handler(req, res) {
  if (process.env.NODE_ENV !== 'development') {
    res.status(200).json([{ name: 'in production, not active ' }]);
  }
  if (req.method === 'POST') {
    const data1 = await readDB();
    // console.log('body is : ' + req.body);
    data1.unshift(req.body);

    const newList = await writeDB('./data/movies.json', data1);

    // console.log('we got post request ' + newList);
    // res.status(200).json(data);

    // const data = await writeDB(
    //   (db = './data/movies.json'),
    //   (array = [{ name: 'from API request' }])
    // );
    // res.status(200).json(data);
  }
  const data = await readDB();
  res.status(200).json(data);
}

const readDB = (db = './data/movies.json') => {
  return new Promise((resolve, reject) => {
    fs.readFile(db, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
};
const writeDB = (db = './data/movies.json', array) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(db, JSON.stringify(array), (err) => {
      if (err) reject(err);
      resolve(array);
    });
  });
};
