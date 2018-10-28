import { Outcome } from '../../work/outcomes/outcome.model';
import { Job } from '../jobs/job.model';

export interface Order {
    id: String;
    jobId: String;
    status: String;
    createdDate: Date;
    assignedNode: String;
    job: Job;
    outcome: Outcome;
}
