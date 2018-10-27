import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './globals.service';
import { Job } from './jobs/job.model';
import { Order } from './orders/order.model';
import { nextContext } from '@angular/core/src/render3';

@Injectable()
export class WorkerNodeService {

  private orders: Order[] = [];

  constructor(public globals: GlobalService, private http: HttpClient) {

  }

  getOrders = new Observable((observer) => {
      this.http.get(this.globals.bossAddress + '/retrieve/order')
      .subscribe((orders: Order[]) => {
          this.orders = orders;
          this.getJobs.subscribe((jobs: Job[]) => {
            observer.next(jobs);
          });
      });
      return this.getOrders;
  });

  getJobs = new Observable((observer) => {
    this.orders.forEach(order => {
      this.http.get(this.globals.bossAddress + '/retrieve/job/' + order.jobId)
      .subscribe((job: Job) => {
        job.orderId = order.id;
        observer.next(job);
      });
    });
  });

}
