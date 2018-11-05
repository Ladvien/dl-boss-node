import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../work-models/order.model';
import { WorkService } from 'src/app/work/work.service';
import { GlobalService } from 'src/app/globals.service';

@Component({
  selector: 'app-completed-jobs',
  templateUrl: './completed-jobs.component.html',
  styleUrls: ['./completed-jobs.component.css']
})


export class ListOrdersComponent implements OnInit, OnDestroy {

  expanded: Boolean = true;
  panelOpenState: Boolean = false;

  // Only Selected Order is displayed.
  selectedOrders: Order[] = [];
  regressionOrders: Order[] = [];
  categoricalOrders: Order[] = [];

  constructor(public workService: WorkService,
              public globalService: GlobalService) {}

  onClickExpandToggle () {

  }

  ngOnInit() {
    this.workService.getOrders
    .subscribe((orders: Order[]) => {

      const ordersWithOutcomes: Order[] = [];
      orders.forEach(order => {
        if (order.outcome) {
          ordersWithOutcomes.push(order);
        }
      });
      orders = ordersWithOutcomes;
      orders = orders.sort((a, b) => <number> a.outcome.metric - <number> b.outcome.metric);

      this.regressionOrders = orders.filter((element, index, array) => {
        // Filter Orders to those with Regression Type Losses.
        return (this.globalService.regressionLossTypes.indexOf(array[index].job.loss) > -1);
      });
      this.categoricalOrders = orders.filter((element, index, array) => {
        // Filters Orders to those with Classification Type Losses.
        return (this.globalService.categoricalLossTypes.indexOf(array[index].job.loss) > -1);
      });
      this.selectedOrders = this.regressionOrders;
    });
  }

  ngOnDestroy() {

  }
}
