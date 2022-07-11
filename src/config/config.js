const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connect = () => {
    mongoose.connect('mongodb+srv://porchouayang:porchouayang@cluster0.wa6nb.mongodb.net/vercel?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.log('Could not connect to MongoDB');
        console.log(err);
    });
}
// module.exports = connect;
module.exports = {
    connect
}