const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));


// routes
app.get('/', (req, res)=>{
    for(let i = 0; i<10000000000; i++){
    }
    res.send("Hello World")
})
app.get('/test', (req, res)=>{
    for(let i = 0; i<1000000000; i++){

    }
    res.send('Stress Test');
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})