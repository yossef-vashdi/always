import connect from '../../../utils/dbConnect';
import Note from '../../../models/diary';

export default async function handler(req, res) {
  // console.log('request method ', req.method);
  connect();
  if (req.method === 'GET') {
    // console.log('get request');
    Note.find()
      .sort({ createdAt: -1 })
      .then((data) => res.status(200).json(data));
  }
  if (req.method === 'POST') {
    // console.log('post request');
    const createNote = new Note(req.body);
    createNote
      .save()
      .then(() =>
        Note.find()
          .sort({ createdAt: -1 })
          .then((data) => res.status(200).json(data))
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: 'error' });
      });
  }
  if (req.method === 'DELETE') {
    // console.log('delete request');
    Note.deleteOne({ _id: req.body._id }).then(() => {
      Note.find()
        .sort({ createdAt: -1 })
        .then((data) => res.status(200).json(data));
    });
  }

  if (req.method === 'PATCH') {
    // console.log('patch request');
    Note.findOne({ _id: req.body._id })
      .then((item) =>
        item.updateOne({
          title: req.body.title,
          body: req.body.body,
          readOnly: req.body.readOnly,
        })
      )
      .then(() => {
        Note.find()
          .sort({ createdAt: -1 })
          .then((data) => res.status(200).json(data));
      });
  }
}
