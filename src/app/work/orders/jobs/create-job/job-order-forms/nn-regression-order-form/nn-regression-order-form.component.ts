import { Component, OnInit } from '@angular/core';
import { NNRegressionOrderModel } from './nn-regression-order.model';
import { HiddenLayer } from '../hidden-layer.model';
import { WorkService } from 'src/app/work/work.service';
import { Job } from '../../../job.model';

@Component({
  selector: 'app-nn-regression-order-form',
  templateUrl: './nn-regression-order-form.component.html',
  styleUrls: ['./nn-regression-order-form.component.css']
})
export class NNRegressionOrderFormComponent implements OnInit {

  nnRegressionOrder: NNRegressionOrderModel;
  hiddenLayers: HiddenLayer[] = [];

  jobCandidate = <Job> {
      'id': '',
      'orderId': '',
      'orderDate': new Date(),
      'hiddenLayers': [],
      'dataFileName': 'unknown',
      'scriptName': 'nn.py',
      'projectName': 'unknown',
      'dependentVariable': 'unknown',
      'crossValidateOnly': true,
      'crossValidationCrossingType': 'neg_mean_squared_error',
      'batchSize': 512,
      'epochs': 1500,
      'patienceRate': 0.05,
      'slowLearningRate': 0,
      'loss': 'mse',
      'pcaComponents': -1,
      'extraTreesKeepThreshd': 0,
      'saveWeightsOnlyAtEnd': false,
      'optimizer': 'rmsprop',
      'lastLayerActivator': '',
      'learningRate': 0.014,
      'l1': 0.01,
      'l2': 0.01,
      'minDependentVarValue': 0,
      'maxDependentVarValue': 999999,
      'scalerType': 'standard'
  };

  constructor(public workService: WorkService) { }

  ngOnInit() {
    this.workService.getMostRecentJob()
    .then((response) => {
      console.log(response);
      this.jobCandidate = <Job>response;
    });
  }

  onLearningRateSliderChange(event) {
    console.log(event.value);
  }

  inputChange(target) {
    console.log(target);
  }

  sliderChange(name, input) {
    switch (name) {
      case 'learningRateSlider':
        this.jobCandidate.learningRate = input.value;
        break;
    }
  }

  onSubmitClick(jobForm) {
    console.log(this.jobCandidate);
  }
}
