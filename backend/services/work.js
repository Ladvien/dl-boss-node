var {Outcome} = require('../database-services/models/outcome');
var {Job} = require('../database-services/models/job');
var {Order} = require('../database-services/models/order');

var file = function(outcome) {
    return new Promise((resolve, reject) => {
        try {
            // Create and try to save a new Outcome from WorkNode
            var outcomeDoc = new Outcome(outcome)
            outcomeDoc.save()
            .then((outcomeDoc, error) => {
                console.log(JSON.stringify(outcomeDoc));
                console.log(JSON.stringify(error));
                console.log(`Saved ${outcomeDoc._id}`)
                // Find the Order associated with the Outcome.
                Order.findOne({"_id": outcomeDoc.orderId }).then((order)=> {
                    console.log(`Found related Order ${order._id}`)
                    // Update the Order.status with Outcome.status
                    order.status = outcomeDoc.status;
                    // Return the Order to the DB with updated status.
                    order.save()
                    .then((orderDoc) => {
                        console.log(`Updated Order ${orderDoc._id}'s status to ${orderDoc.status}`)
                        // Provide a response to the WorkerNode.
                        resolve(orderDoc);
                    });
                });
            });
        } catch (err) {
            reject({'error': 'Problem saving assignment outcome. ', 'outcome': outcome})
        }
    })
}

var create = function(job) {
    return new Promise((resolve, reject) => {
        try {
            var jobDoc = new Job(job)
            jobDoc.save()
            .then((doc) => {
                doc.save()
                .then((response) => {
                    let job = response;
                    var orderDoc = new Order({'jobId': job._id, 
                                              'projectName': job.projectName,
                                              'createdDate': new Date(),
                                              'status': 'unassigned'})
                    orderDoc.save()
                    .then((doc) => {
                        resolve(doc);
                    });
                });
            });
        } catch (err) {
            reject({'error': 'Problem creating job. ', 'job': job})
        }
    })
}

module.exports = {file,
                 create}