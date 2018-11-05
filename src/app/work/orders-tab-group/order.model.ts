import { Outcome } from './outcome.model';
import { Job } from './job-forms/nn-regression/order-form/del_nn-regression-job.model';




export interface Order {
    id: String;
    jobId: String;
    status: String;
    createdDate: Date;
    assignedNode: String;
    job: Job;
    outcome: Outcome;
}
