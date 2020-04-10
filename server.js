const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//Init Middleware
// app.use(express.json({extended : false}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(cors());


const port = 5000;

const PORT = port || process.env.PORT

app.get('/', (req, res, next) =>{
        res.send('Hello from the backend');
});

app.use('/api/message/hire', require('./routes/hire'));
app.use('/api/message/apply', require('./routes/apply'));

app.listen(PORT, () =>{
    console.log('We are live from the Backend!!!');
});