const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var timeout = require('connect-timeout')

const {mongoose} = require('./backend/database-services/dl-mongo');
const workerNode = require('./backend/services/worker-node');
const work = require('./backend/services/work');

// Database collection
var {Job} = require('./backend/database-services/models/job');
var {Order} = require('./backend/database-services/models/order');
var {Outcome} =require('./backend/database-services/models/outcome');

const bossAddress = 'http://localhost:3000'

// Server setup.
var app = express();
const port = 3000;

// Add request parameters.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 
                  'Origin, X-Requested-With, Content-Type, Accept'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

// Add the middleware.
app.use(bodyParser.json())

/*
This route is for creating new Jobs on the queue
*/
app.post('/job/:method', (req, res) => {
    if (!req.body) { return { 'message': 'No request provided.' }};
    try {
        switch (req.params.method) {
            case 'create':
                work.create(req.body)
                .then((response) =>{
                    res.send(response);
                }).catch((error) => {
                    res.send({'error': error })
                });
                break;
            default:
                res.send({'error': 'No method selected.'})
        }
    } catch (err) {
        res.send({'error': 'Error with request shape.', err})
    }
});

/*
This route is for adding new WorkerNodes to the database.
*/
app.post('/worker-node/:method', (req, res) => {
    if (!req.body) { return { 'message': 'No request provided.' }};
    try {
        switch (req.params.method) {
            case 'create':
                workerNode.create(req.body)
                .then((response) =>{
                    res.send(response);
                }).catch((error) =>{
                    res.send({'error': error.message});
                })
            break;
            default:
                throw err;
        }
    } catch (err) {
        res.send({'error': 'Error with request shape.', err })
    }
});

app.post('/test', (req, res) => {
    if (!req.body) { return { 'message': 'No request provided.' }};
    try {
        let job = req.body;
        console.log(job);
        // Assign the job
        work.assign({'workerNodeName': 'dl',
        'workerNodeAddress': 'http://192.168.1.88:3000',
        'creationDate': new Date(),
        'job': job }).then((response) => {
            // Execute
            const assignment = response;

            // Add the generated Id to the job. Tag and track.
            job.callbackAddress = bossAddress;
            job.assignmentId = response._id
            work.file(job)
            .then((result) =>{
                console.log(result);
                res.send(result);
            });
        });
    } catch (err) {
        res.send({'error': 'Error with request shape.', err })
    }
});

app.post('/callback', (req, res) => {
    if (!req.body) { return { 'message': 'No request provided.' }};
    let outcome = req.body;
    console.log(outcome);
    try {
        work.file(outcome)
        .then((response) =>{
            console.log(response);
            res.send(response);
        })
    } catch (err) {
        res.send({'error': 'Error with request shape.', err })
    }
});

/*
Route for Worker Node to let the Boss know it needs a Job.
The oldest Job which is unassigned is provided.
*/
app.post('/bored/:id', (req, res) => {
    if (!req.body) { return { 'message': 'No request provided.' }};
    try {
        let workerNodeId = req.params.id;
        console.log(`${workerNodeId} said it's bored.`);
        if (!workerNodeId) { throw {'error': 'No id provided.'}}
        Order.findOne({ status: 'unassigned' }, {}, { sort: { 'created_at' : -1 } }, (err, order) => {
            console.log(order);
            try {
                if (!order) throw {'error': 'No unassigned orders found.'}
            } catch (err) {
                res.send(err);
            }
            console.log(`Found a work order, #${order._id}`)
            order.status = 'assigned';
            console.log(`Provided ${workerNodeId} with ${order.jobId}`);
            order.save()
            .then((doc) => {
                console.log(`Updated the Order #${doc.id}'s status to ${order.status}`);
                res.send(doc);
            });
        })
        .catch((err) => {
            res.send({'message': `No work to do.  Don't get used to it.`})
        });
    } catch (err) {
        res.send({'error': 'Error with request shape.', err })
    }
});

/*
Retrieve Orders or Job
*/
app.get('/retrieve/:type/:id?/:param1?', (req, res) => {
    if (!req.body) { return { 'message': 'No request provided.' }};
    try {
        let type = req.params.type;
        let id = req.params.id;
        let param1 = req.params.param1;
        switch(type) {
            case 'order':
                Order.find().then((response) => {
                    res.send(response);
                });
                break;
            case 'job':
                if (!id)  { throw {'error': 'Missing Id'} }
                Job.findOne({'_id': id })
                .then((response) => {
                    res.send(response);
                });
                break;
            case 'latest-job':
                Job.findOne().limit(1).sort({$natural:-1})
                .then((response) => {
                    res.send(response);
                });
                break;
            case 'outcome':
                if (!id)  { throw {'error': 'Missing Id'} }
                Outcome.findOne({'orderId': id })
                .then((response) => {
                    res.send(response);
                });
                break;
            default:
                throw error
        }
    } catch (err) {
        res.send({'error': 'Error with request shape.', err })
    }
})

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
