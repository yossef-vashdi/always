import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
  },
  { timestamps: true }
);
console.log(mongoose.models['Note']);
const Note =
  mongoose.models['Note'] || mongoose.model('Note', noteSchema);

export default Note;
