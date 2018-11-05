import { Job } from './del_nn-regression-job.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NNRegressionOrderModel } from './nn-regression-order.model';
import { HiddenLayer } from './hidden-layer.model';
import { WorkService } from 'src/app/work/work.service';
import { Observable, of } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { MatTable, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-nn-regression-order-form',
  templateUrl: './nn-regression-order-form.component.html',
  styleUrls: ['./nn-regression-order-form.component.css']
})
export class NNRegressionOrderFormComponent implements OnInit {
  @ViewChild('hiddenLayers') hiddenLayersTable: MatTable<any>;

  nnRegressionOrder: NNRegressionOrderModel;

  jobCandidate = <Job> {
      'id': '',
      'orderId': '',
      'orderDate': new Date(),
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
      'scalerType': 'standard',
      'hiddenLayers': [{'activation': 'relu', 'widthModifier': 0.5, 'dropout': 0.0 }]
  };

  constructor(public workService: WorkService) { }

  displayedColumns: string[] = ['activation', 'widthModifier', 'dropout'];
  dataSource: MatTableDataSource<HiddenLayer>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(<HiddenLayer[]>this.jobCandidate.hiddenLayers);
    this.workService.getMostRecentJob()
    .then((response) => {
      delete response['_id'];
      delete response['__v'];
      this.jobCandidate = <Job>response;
    });
  }

  inputChange(target) {

  }

  sliderChange(name, input) {
    switch (name) {
      case 'learningRateSlider':
        this.jobCandidate.learningRate = input.value;
        break;
    }
  }

  onSubmitClick(jobForm) {
    this.workService.createJob(this.jobCandidate);
  }

  onAddLayerClick() {
    if (this.dataSource.data[0]) {
      const bottomLayer = this.dataSource.data.length - 1;
      this.dataSource.data.push({...this.dataSource.data[bottomLayer]});
      this.hiddenLayersTable.renderRows();
      this.jobCandidate.hiddenLayers = this.dataSource.data;
    } else {
      const newLayer = <HiddenLayer>{'activation': 'relu', 'widthModifier': 0.5, 'dropout': 0.0 };
      this.dataSource.data.push(newLayer);
      this.hiddenLayersTable.renderRows();
      this.jobCandidate.hiddenLayers = this.dataSource.data;
    }
  }

  onDeleteLayerClick() {
    if (this.dataSource.data.length > 1) {
      this.dataSource.data.pop();
      this.hiddenLayersTable.renderRows();
      this.jobCandidate.hiddenLayers = this.dataSource.data;
    }
  }

}
