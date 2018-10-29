import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { OrdersService } from '../orders.service';
import { WorkService } from '../../work.service';
import { Order } from '../order.model';
import { GlobalService } from 'src/app/globals.service';

@Component({
  selector: 'app-orders-tab-group',
  templateUrl: './orders-tab-group.component.html',
  styleUrls: ['./orders-tab-group.component.css']
})
export class OrdersTabGroupComponent implements OnInit, OnDestroy {

  @Output() ordersReceived = new EventEmitter();

  private currentTabLabel = 'Categorical';
  constructor(public workService: WorkService,
              public ordersService: OrdersService) { }

  onClickExpandToggle () {}

  tabChanged(selection) {
    this.ordersService.selectedOrderType = this.currentTabLabel;
  }

  ngOnInit() {
    this.ordersService.selectedOrderType = this.currentTabLabel;
  }

  ngOnDestroy() {

  }


}
