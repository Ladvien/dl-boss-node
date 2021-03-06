export interface Job {
        id: String;
        orderId: String;
        orderDate: Date;
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
        optimizer: String;
        lastLayerActivator: String;
        learningRate: Number;
        l1: Number;
        l2: Number;
        minDependentVarValue: Number;
        maxDependentVarValue: Number;
        scalerType: String;
        hiddenLayers: Array <Object>;
}
