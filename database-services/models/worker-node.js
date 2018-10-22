var uniqueValidator = require('mongoose-unique-validator');

var {mongoose} = require('../dl-mongo');

var schema = new mongoose.Schema({
    'address': {
        type: String,
        required: [true, 'Must provide an IP address to reach the node.'],
        unique: true
    },
    'name': {
        type: String,
        required: [true, 'Must provide a name.'],
        unique: true
    },
    'dataPath': {
        type: String,
        required: [true, 'Must provide a dataPath.']
    },
    'writePath': {
        type: String,
        required: [true, 'Must provide a writePath.']
    },
    'active': {
        type: Boolean
    }, 
    'busy': {
        type: Boolean,
    }
});

schema.plugin(uniqueValidator);
var WorkerNode = mongoose.model('WorkerNode', schema);

module.exports = {WorkerNode}