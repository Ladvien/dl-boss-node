import { Job } from './jobs/job-order-forms/nn-regression-order-form/nn-regression-job.model';
import { Outcome } from './outcome.model';


export interface Order {
    id: String;
    jobId: String;
    status: String;
    createdDate: Date;
    assignedNode: String;
    job: Job;
    outcome: Outcome;
}
