import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from '../orders.service';
import { Order } from '../order.model';
import { GlobalService } from '../../globals.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit, OnDestroy {
  @Output() ordersReceived = new EventEmitter();
  constructor(public ordersServices: OrdersService, public globals: GlobalService) {

  }

  orders: Order[] = [];

  ngOnInit() {
    this.ordersServices.getOrders
    .subscribe((event) => {
      this.orders = event;
      this.ordersReceived.emit(event);
    });
  }

  onOrdersReceived(orders) {
    this.orders = orders;
  }

  ngOnDestroy() {
    this.ordersServices.getOrders.unsubscribe();
  }


}
