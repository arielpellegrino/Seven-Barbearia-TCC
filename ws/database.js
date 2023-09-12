const mongoose = require('mongoose');
const URI = 'mongodb+srv://trlucas:YPlBSFVar4KQQk4h@sevenbarbearia.olng3tn.mongodb.net/?retryWrites=true&w=majority';

// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB On'))
    .catch(() => console.log(err));