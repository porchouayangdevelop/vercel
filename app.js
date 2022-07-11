const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// connect to MongoDB
require('./src/config/config').connect();

// routes
require('./src/routes/userRouter')(app);

// listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});

module.exports = app;