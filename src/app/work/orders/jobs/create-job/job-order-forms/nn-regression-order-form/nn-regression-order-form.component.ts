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

  learningRate: Number = 0;

  constructor(public workService: WorkService) { }

  ngOnInit() {
    this.workService.getMostRecentJob()
    .then((response) => {
      console.log(<Job>response);
    });
  }

  onLearningRateSliderChange(event) {
    console.log(event.value);
  }

}
