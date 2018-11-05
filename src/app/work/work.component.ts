import { Component, OnInit } from '@angular/core';
import { WorkService } from './work.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  constructor(public workService: WorkService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.workService.selectedWorkType = <String>params['type'];
    });
  }

  tabChanged(event) {
    this.workService.setWorkType(event.index);
  }

}
