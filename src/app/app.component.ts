import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dl-desk';

  orders = [];

  onOrdersReceived(orders) {
    this.orders = orders;
    console.log(orders);
  }
}
