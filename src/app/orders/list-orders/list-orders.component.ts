import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Order } from '../order.model';
import { GlobalService } from '../../globals.service';
import { WorkerNodeService } from 'src/app/worker-node.service';
import { Job } from '../../jobs/job.model';

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

  panelOpenState: Boolean = false;
  orders: Order[] = [];
  jobs: Job[] = [];

  ngOnInit() {
    this.workerNodeService.getOrders
    .subscribe((event) => {
      this.orders = event;
      this.ordersReceived.emit(event);
      this.workerNodeService.getJobs
      .subscribe((job: Job) => {
        this.jobs.push(job);
      });
    });
  }

  onOrdersReceived(orders) {
    this.orders = orders;
  }

  ngOnDestroy() {
    this.workerNodeService.getOrders.unsubscribe();
  }


}
