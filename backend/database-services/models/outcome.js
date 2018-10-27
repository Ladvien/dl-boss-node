var {mongoose} = require('../dl-mongo');

var schema = new mongoose.Schema({
    "workerNodeName": String,
    "status": {type: String, required: true },
    "orderId": {type: String, required: true },
    "loss": Number,
    "metric": Number
});

var Outcome = mongoose.model('Outcome', schema)

module.exports = {Outcome}