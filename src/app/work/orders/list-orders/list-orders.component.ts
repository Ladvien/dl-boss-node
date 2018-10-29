import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { GlobalService } from '../../../globals.service';
import { WorkService } from '../../work.service';
import { Order } from '../../../work/orders/order.model';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})


export class ListOrdersComponent implements OnInit, OnDestroy {

  expanded: Boolean = true;
  panelOpenState: Boolean = false;
  completedRegressionOrders: Order[] = [];
  completedRegressionCategorical: Order[] = [];

  constructor(public workerNodeService: WorkService, public globals: GlobalService) {}

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
