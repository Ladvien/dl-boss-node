import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-orders-tab-group',
  templateUrl: './orders-tab-group.component.html',
  styleUrls: ['./orders-tab-group.component.css']
})
export class OrdersTabGroupComponent implements OnInit, OnDestroy {

  @Output() ordersReceived = new EventEmitter();

  constructor(public workService: WorkService) { }

  onClickExpandToggle () {}

  tabChanged(event) {
    console.log(event.tab.textLabel);
  }

  ngOnInit() { }

  ngOnDestroy() {

  }


}
