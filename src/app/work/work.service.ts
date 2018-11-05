import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../globals.service';
import { Job } from './job-order-forms/nn-regression/order-form/del_nn-regression-job.model';
import { Order } from './work-models/order.model';
import { Outcome } from './work-models/outcome.model';

enum WorkTypes {
  nnRegression = 0,
  nnCategorical
}

@Injectable()
export class WorkService {

  constructor(public globals: GlobalService, private http: HttpClient) {}

  // Used to determine what Work is being run.
  selectedWorkType: String;
  workTypes = {
    'nn-regression': { 'label': 'Regression', 'index': WorkTypes.nnRegression },
    'nn-categorical': { 'label': 'Categorical', 'index': WorkTypes.nnCategorical }
  };
  workTypeNames = Object.keys(this.workTypes);

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

  setWorkType(newWorkType) {
    this.selectedWorkType =  this.workTypeNames[newWorkType];
    console.log(this.selectedWorkType);
  }

  createJob(job: Job) {
    return new Promise((resolve, reject) => {
      this.http.post<Job>(this.globals.bossAddress + '/job/create', job)
      .subscribe((response) => {
        console.log(response);
        try {
          if (!job) { throw {'error': 'Unable to retrieve latest job'}; }
          resolve(job);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  getMostRecentJob() {
    return new Promise((resolve, reject) => {
      this.http.get(this.globals.bossAddress + '/retrieve/latest-job/').subscribe((job) => {
        try {
          if (!job) { throw {'error': 'Unable to retrieve latest job'}; }
          resolve(job);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

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
