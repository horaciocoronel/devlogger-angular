import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
	logs: Log[];
  constructor() { }

  ngOnInit() {
		this.logs = [
			{
				id: '1',
				text: 'Generated components',
				date: new Date( 3/31/2018)
			},
			{
				id: '2',
				text: 'Added Bootstrap',
				date: new Date( 4/1/2018)
			},
			{
				id: '3',
				text: 'Added logs component',
				date: new Date( 4/1/2018)
			}
		]
  }

}
