import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  // jobs = [
  //     { title: 'First Job', content: 'This is the first job'},
  //     { title: 'Second Job', content: 'This is the first job'}
  // ];

  jobs = [];

  constructor() { }

  ngOnInit() {
  }

}
