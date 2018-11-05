import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-work-type',
  templateUrl: './work-type.component.html',
  styleUrls: ['./work-type.component.css']
})
export class WorkTypeComponent implements OnInit, OnDestroy {

  constructor(public workService: WorkService) { }

  onClickExpandToggle () {}

  tabChanged(event) {
    console.log(event.tab.textLabel);
  }

  ngOnInit() { }

  ngOnDestroy() {

  }
}
