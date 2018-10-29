import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-tab-group',
  templateUrl: './order-tab-group.component.html',
  styleUrls: ['./order-tab-group.component.css']
})
export class OrderTabGroupComponent implements OnInit, OnDestroy {

  @Output() ordersReceived = new EventEmitter();

  private currentTabLabel = 'Categorical';

  constructor(ordersService: OrdersService) { }

  onClickExpandToggle () {}

  tabChanged(event: MatTabChangeEvent) {
    this.currentTabLabel = event.tab.textLabel;
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {

  }


}
