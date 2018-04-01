import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
@Injectable()
export class LogService {
	logs: Log[]

  constructor() {
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
	 getLogs() {
		 return this.logs
	 }

}
