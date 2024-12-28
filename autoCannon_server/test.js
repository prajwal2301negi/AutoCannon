const autocannon = require('autocannon');

// Autocannon keeps the server under heavy load.

const url = 'http://localhost:3000';
const duration = 30; // 30 sec

const instance = autocannon({
    url,
    duration
},( err, result)=>{
    if (err) {
        console.error(err);
    }
    else{
        console.log(result);
    }
});

autocannon.track(instance)