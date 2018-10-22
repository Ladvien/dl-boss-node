var {mongoose} = require('../dl-mongo');

var schema = new mongoose.Schema({
    "workerNodeName": {type: String, required: true },
    "workerNodeAddress": {type: String, required: true },
    "creationDate": Date,
    "job": {type: Object, required: true }
});

var Assignment = mongoose.model('Assignment', schema)

module.exports = {Assignment}