var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/DLApp', { useNewUrlParser: true }, (err) => {
    if(err) {
        console.log('Error connecting to database.')
        process.exit('Error connecting to database.')
    }
});

module.exports = {mongoose};
