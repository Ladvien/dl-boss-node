import { Component, OnInit } from '@angular/core';
import { WorkService } from '../work.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-status',
  templateUrl: './work-status.component.html',
  styleUrls: ['./work-status.component.css']
})
export class WorkStatusComponent implements OnInit {


  selectedTabIndex = 0;
  constructor(public workService: WorkService, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  tabChanged(event) {

  }

  tabOrdersTabGroupChanged(event) {
    console.log(event.tab);
  }
}
