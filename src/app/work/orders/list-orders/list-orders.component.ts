import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit, OnDestroy {
  @Output() ordersReceived = new EventEmitter();
  @Output() jobsReceived = new EventEmitter();

  onClickExpandToggle () {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }


}
