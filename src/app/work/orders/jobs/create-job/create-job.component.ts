import { Component } from '@angular/core';

enum JobTypeSelections {
  regression = 'regression',
  classification = 'classification'
}

@Component({
  selector: 'app-job-create',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent {

  jobType = JobTypeSelections.regression;

}
