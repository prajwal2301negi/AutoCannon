const express = require('express');

const app = express();

const proxy = require('express-http-proxy');

app.use('/stress-test', proxy('http://localhost:3002'));
app.use('/', proxy('http://localhost: 3001'));

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})