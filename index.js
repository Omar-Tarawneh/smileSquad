'use strict';

require('dotenv').config();

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options)

// Start the web server
.then(()=>{
  // Start the web server
  
  require('./src/server').start(process.env.PORT || 4040);
    
  }).catch((e)=>{
    console.log('error found',e.message);
  });