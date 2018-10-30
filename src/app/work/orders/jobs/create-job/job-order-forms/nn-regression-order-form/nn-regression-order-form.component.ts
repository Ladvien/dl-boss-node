import { Component, OnInit } from '@angular/core';
import { NNRegressionOrderModel } from './nn-regression-order.model';
import { HiddenLayer } from '../hidden-layer.model';

@Component({
  selector: 'app-nn-regression-order-form',
  templateUrl: './nn-regression-order-form.component.html',
  styleUrls: ['./nn-regression-order-form.component.css']
})
export class NNRegressionOrderFormComponent implements OnInit {

  nnRegressionOrder: NNRegressionOrderModel;
  hiddenLayers: HiddenLayer[] = [];

  constructor() { }

  ngOnInit() {
  }

}
