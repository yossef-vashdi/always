import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  name: String,
});
console.log(mongoose.models['Test']);
const Test =
  mongoose.models['Test'] || mongoose.model('Test', testSchema);

export default Test;
