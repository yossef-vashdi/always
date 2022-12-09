import connect from '../../../utils/dbConnect';
import Note from '../../../models/diary';

export default async function handler(req, res) {
  connect();
  if (req.method === 'GET') {
    Note.find()
      .sort({ createdAt: -1 })
      .then((data) => res.status(200).json(data));
  }
  if (req.method === 'POST') {
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
    Note.deleteOne({ _id: req.body._id }).then(() => {
      Note.find()
        .sort({ createdAt: -1 })
        .then((data) => res.status(200).json(data));
    });
  }

  if (req.method === 'PATCH') {
    Note.findOne({ _id: req.body._id })
      .then((item) =>
        item.updateOne({ title: req.body.title, body: req.body.body })
      )
      .then(() => {
        Note.find()
          .sort({ createdAt: -1 })
          .then((data) => res.status(200).json(data));
      });
  }
}
