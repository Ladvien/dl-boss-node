import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../globals.service';
import { Job } from './orders/jobs/job.model';
import { Order } from './orders/order.model';
import { Outcome } from './orders/outcomes/outcome.model';

@Injectable()
export class WorkService {

  constructor(public globals: GlobalService, private http: HttpClient) {}

  getOrders = new Observable((observer) => {
    this.http.get(this.globals.bossAddress + '/retrieve/order')
    .subscribe((orders: Order[]) => {
      this.attachJobs(orders)
      .subscribe((ordersJobs: Order[]) => {
        this.attachOutcomes(orders)
        .subscribe((ordersFull: Order[]) => {
          observer.next(ordersFull);
        });
      });
    });
  });

  attachJobs (orders: Order[]) {
    const ordersWithJobs: Order[] = [];
    return Observable.create(async (observer: Observer<Order[]>) => {
      for (const order of orders) {
        await this.http.get(this.globals.bossAddress + '/retrieve/job/' + order.jobId).toPromise()
        .then((job) => {
          order.job = <Job> job;
          ordersWithJobs.push(order);
        });
      }
      observer.next(ordersWithJobs);
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

  getOutcome (order: Order) {
    return Observable.create((observer: Observer<Outcome>) => {
      this.http.get(this.globals.bossAddress + '/retrieve/outcome/' + order['_id'])
      .subscribe((outcome: Outcome) => {
        observer.next(outcome);
      });
    });
  }

  attachOutcomes (orders: Order[]) {
    const ordersWithOutcomes: Order[] = [];
    return Observable.create(async (observer: Observer<Order[]>) => {
      for (const order of orders) {
        await this.http.get(this.globals.bossAddress + '/retrieve/outcome/' + order['_id']).toPromise()
        .then((outcome) => {
          order.outcome = <Outcome> outcome;
          ordersWithOutcomes.push(order);
        });
      }
      observer.next(ordersWithOutcomes);
    });
  }



}
