import { Job } from './work/work-type/orders-tab-group/jobs/job-order-forms/nn-regression-order-form/nn-regression-job.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dl-desk';
  events: string[] = [];
  opened: boolean;

  orders = [];
  jobs: Job[] = [];

  onOrdersReceived(orders) {
    this.orders = orders;
    console.log(orders);
  }

  onJobReceived(jobs) {
    this.jobs = jobs;
  }
}
