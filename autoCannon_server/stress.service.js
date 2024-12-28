const express = require('express');
const morgan = require('morgan');
const cluster = require('cluster');
const os = require('os');

const numCPUs = os.cpus().length; // Get the number of CPU cores

if (cluster.isMaster) {
    console.log(`Master process is running with PID: ${process.pid}`);
    
    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Listen for workers exiting and log the event
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} exited. Code: ${code}, Signal: ${signal}`);
        console.log('Starting a new worker...');
        cluster.fork(); // Restart the worker
    });
} else {
    const app = express();
    app.use(morgan('dev'));

    app.get('/', (req, res) => {
        for (let i = 0; i < 10000000000; i++) {
            // Simulate a heavy computation
        }
        res.send('Hello World');
    });

    const PORT = 3002;
    app.listen(PORT, () => {
        console.log(`Worker ${process.pid} is running on PORT ${PORT}`);
    });
}
