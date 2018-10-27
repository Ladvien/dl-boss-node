var {Outcome} = require('../database-services/models/outcome');
var {Job} = require('../database-services/models/job');
var {Order} = require('../database-services/models/order');

var file = function(outcome) {
    return new Promise((resolve, reject) => {
        try {
            var outcomeDoc = new Outcome(outcome)
            outcomeDoc.save()
            .then((doc) => {
                doc.save()
                .then((response) => {
                   resolve(response);
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