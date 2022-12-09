import connect from '../../../utils/dbConnect';
import Test from '../../../models/schema';

export default function handler(req, res) {
  connect();
  const create = new Test({ name: 'Troy' });
  create
    .save()
    .then(() => {
      res.status(200).json(create);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: 'error' });
    });
}
