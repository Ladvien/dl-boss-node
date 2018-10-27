import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './globals.service';
import { Job } from './jobs/job.model';
import { Order } from './orders/order.model';
import { Outcome } from './outcomes/outcome.model';

@Injectable()
export class WorkerNodeService {

  constructor(public globals: GlobalService, private http: HttpClient) {}

  getOrders = new Observable((observer) => {
      this.http.get(this.globals.bossAddress + '/retrieve/order')
      .subscribe((orders: Order[]) => {
          observer.next(orders);
      });
  });

  getJobs (orders: Order[]) {
    return Observable.create((observer: Observer<Job>) => {
      orders.forEach(order => {
        this.http.get(this.globals.bossAddress + '/retrieve/job/' + order.jobId)
        .subscribe((job: Job) => {
          job.orderId = order.id;
          job.orderDate = order.createdDate;
          observer.next(job);
        });
      });
    });
  }

  getJob (order: Order) {
    return Observable.create((observer: Observer<Job>) => {
        this.http.get(this.globals.bossAddress + '/retrieve/job/' + order.jobId)
        .subscribe((job: Job) => {
          job = this.validateJob(job);
          observer.next(job);
        });
    });
  }

  validateJob(job: Job) {
    if (!job.projectName) { job.projectName = 'Unknown'; }
    return job;
  }

  // getOutcomes (jobs: Job[]) {

  // }

}
