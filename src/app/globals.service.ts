import { Injectable } from '@angular/core';
import { Work } from './work/work.model';

@Injectable()
export class GlobalService {

  
  // Address of the Boss Node Server.
  // bossAddress: String = 'http://maddatum.com:3000';
  bossAddress: String = 'http://localhost:3000';

  // Used to determine what type of Job.
  regressionLossTypes: String[] = ['mse', 'mae'];
  categoricalLossTypes: String[] = ['binary_crossentropy', 'categorical_crossentropy'];

  workTypes: Work[] = [];
  constructor() {this.workTypes.push({'type': 'nn', 'route': 'nn'}); }
}
