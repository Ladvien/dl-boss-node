import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { GlobalService } from '../../../../globals.service';
import { WorkerNodeService } from 'src/app/worker-node.service';
import { Job } from '../../../jobs/job.model';
import { Outcome } from '../../../../work/outcomes/outcome.model';
import { Order } from '../../../../work/orders/order.model';

@Component({
  selector: 'app-regression',
  templateUrl: './regression.component.html',
  styleUrls: ['./regression.component.css']
})
export class RegressionComponent implements OnInit, OnDestroy {

  expanded: Boolean = true;
  panelOpenState: Boolean = false;
  completedRegressionOrders: Order[] = [];
  completedRegressionCategorical: Order[] = [];

  constructor(public workerNodeService: WorkerNodeService, public globals: GlobalService) {}

  onClickExpandToggle () {

  }

  ngOnInit() {

    this.workerNodeService.getOrdersFull
    .subscribe((orders: Order[]) => {
      console.log(orders[0].outcome);
    });

  }

  ngOnDestroy() {

  }
}
