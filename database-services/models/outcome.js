var {mongoose} = require('../dl-mongo');

var schema = new mongoose.Schema({
    "workerNodeName": String,
    "status": {type: Number, required: true },
    "jobId": {type: String, required: true },
    "loss": Number,
    "metric": Number
});

var Outcome = mongoose.model('Outcome', schema)

module.exports = {Outcome}