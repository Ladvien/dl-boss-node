import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Order } from '../order.model';
import { GlobalService } from '../../globals.service';
import { WorkerNodeService } from 'src/app/worker-node.service';
import { Job } from '../../jobs/job.model';
import { Outcome } from 'src/app/outcomes/outcome.model';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit, OnDestroy {
  @Output() ordersReceived = new EventEmitter();
  @Output() jobsReceived = new EventEmitter();
  constructor(public workerNodeService: WorkerNodeService, public globals: GlobalService) {

  }

  expanded: Boolean = true;

  panelOpenState: Boolean = false;
  orders: Order[] = [];
  onClickExpandToggle () {

  }

  ngOnInit() {
    this.workerNodeService.getOrders
    .subscribe((orders: Order[]) => {
      orders.forEach(order => {
        this.workerNodeService.getJob(order)
        .subscribe((job: Job) => {
          order.job = job;
          this.workerNodeService.getOutcomes(order.job)
          .subscribe((outcome: Outcome) => {
            order.outcome = outcome;
            this.orders.push(order);
          });
        });
      });
    });
  }

  onOrdersReceived(orders) {
    this.orders = orders;
  }

  ngOnDestroy() {

  }


}
