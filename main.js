require('dotenv').config();

const
  mongoose = require('mongoose'),
  express = require('express'),
  parser = require('body-parser'),
  path = require('path'),
  cors = require('cors'),
  _ = require('lodash');

const
  app = express();

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
  
async function run() {
  let port = process.env.SERVER_PORT;
  let mongoURI = process.env.MONGO_URI;
  let server = await app.listen(port);
  let mongo = await mongoose.connect(mongoURI, { useNewUrlParser: true })

  console.clear();
  console.log(`Server: ${port}\nDatabase: ${mongoURI}`)
}

run();