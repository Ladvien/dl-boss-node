import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from '../orders.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  @Output() ordersReceived = new EventEmitter();
  constructor(public ordersServices: OrdersService) {

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

}
