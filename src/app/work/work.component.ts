import { Component, OnInit } from '@angular/core';
import { WorkService } from './work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  selectedTabIndex = 0;

  constructor(public workService: WorkService) { }

  ngOnInit() {
  }

  tabChanged(event) {
    console.log(this.selectedTabIndex);
  }

}
