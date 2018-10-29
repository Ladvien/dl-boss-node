import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkService } from '../work.service';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  selectedOrderType = '';

  constructor(public workService: WorkService) { }

  getOrders () {

  }

}
