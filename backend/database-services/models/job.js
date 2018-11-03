var {mongoose} = require('../dl-mongo');

var schema = new mongoose.Schema({
    "status": String,
    "assignedWorkerNode": String,
	"dataFileName": String,
	"scriptName": String,
	"root": String,
	"writePath": String,
	"projectName": String,
	"dataPath": String,
	"dependentVariable": String,
	"crossValidateOnly": Boolean,
	"crossValidationCrossingType": String,
	"batchSize": Number,
	"epochs": Number,
	"patienceRate": Number,
	"slowLearningRate": Number,
	"loss": String,
	"pcaComponents": Number,
	"extraTreesKeepThreshd": Number,
	"saveWeightsOnlyAtEnd": Boolean,
	"optimizer": String,
	"lastLayerActivator": String,
	"learningRate": Number,
	"l1": Number,
	"l2": Number,
	"minDependentVarValue": Number,
	"maxDependentVarValue": Number,
	"scalerType": String,
	"hiddenLayers": Array
});

var Job = mongoose.model('Job', schema)

module.exports = {Job}