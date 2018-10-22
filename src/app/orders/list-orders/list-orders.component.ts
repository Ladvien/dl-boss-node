import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  constructor(public ordersServices: OrdersService) {

  }

  // orders = [
  //     { title: 'First order', content: 'This is the first order'},
  //     { title: 'Second order', content: 'This is the first order'}
  // ];

  orders: Order[] = [];

  ngOnInit() {
    this.ordersServices.getOrders();
  }

}
