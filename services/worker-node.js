var {WorkerNode} = require('../database-services/models/worker-node');
var create = function(workerNode) {
    return new Promise((resolve, reject) => {
        try {
            var workerNodeDoc = new WorkerNode(workerNode)
            workerNodeDoc.save()
            .then((doc) => {
                doc.save()
                .then((response) => {
                   resolve(response);
                }).catch((error) =>{
                    reject(error);
                })
            }).catch((error) =>{
                reject(error);
            });
        } catch (err) {
            reject({'error': 'Problem assigning WorkerNode. ', 'workerNode': WorkerNode})
        }
    })
}

module.exports = {create}