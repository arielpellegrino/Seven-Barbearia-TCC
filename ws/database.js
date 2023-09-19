const mongoose = require('mongoose');

const URI = 'mongodb+srv://adminUser:fTWr3Weqfn8qWPR2@desenvolvimento.01zgxdy.mongodb.net/?retryWrites=true&w=majority';

//const env = process.env.NODE_ENV || 'dev';
let options = {};

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
  .connect(URI, options)
  .then(() => console.log('-- Banco de dados em funcionamento'))
  .catch((err) => console.log(err));
