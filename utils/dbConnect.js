import React from 'react';
import mongoose from 'mongoose';

function connect() {
  if (mongoose.connections[0].readyState) {
    console.log('connected already');
  } else {
    console.log('connecting to DB');
    mongoose.connect(process.env.MONGODB_URI, () => {
      console.log('connection to DB established');
    });
  }
}

export default connect;
