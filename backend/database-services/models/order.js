var {mongoose} = require('../dl-mongo');

var schema = new mongoose.Schema({
    "jobId": { type: String, required: true },
    "projectName": { type: String },
    "status": {type: String, required: true },
    "createdDate": {type: Date, required: true },
    "assignedNode": {type: String }
});

var Order = mongoose.model('Order', schema)

module.exports = {Order}