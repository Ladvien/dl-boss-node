interface Job {
        dataFileName: String;
        scriptName: String;
        projectName: String;
        dependentVariable: String;
        crossValidateOnly: Boolean;
        crossValidationCrossingType: String;
        batchSize: Number;
        epochs: Number;
        patienceRate: Number;
        slowLearningRate: Number;
        loss: String;
        pcaComponents: Number;
        extraTreesKeepThreshd: Number;
        saveWeightsOnlyAtEnd: Boolean;
        optimizer: Number;
        lastLayerActivator: String;
        learningRate: Number;
        l1: Number;
        l2: Number;
        minDependentVarValue: Number;
        maxDependentVarValue: Number;
        scalerType: String;
        hiddenLayers: Array <Object>;
}
