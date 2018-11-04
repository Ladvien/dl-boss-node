import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  // Address of the Boss Node Server.
  // bossAddress: String = 'http://maddatum.com:3000';
  bossAddress: String = 'http://localhost:3000';

  // Used to determine what type of Job.
  regressionLossTypes: String[] = ['mse', 'mae'];
  categoricalLossTypes: String[] = ['binary_crossentropy', 'categorical_crossentropy']
}
