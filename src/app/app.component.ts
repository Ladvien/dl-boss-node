
import { Component } from '@angular/core';
import { Job } from './work/job-order-forms/nn-regression/order-form/del_nn-regression-job.model';





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
