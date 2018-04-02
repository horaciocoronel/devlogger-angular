import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Log } from '../models/Log';
@Injectable()
export class LogService {
	logs: Log[];

	private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
	selectedLog = this.logSource.asObservable();
	private stateSource = new BehaviorSubject<boolean>(true);
	stateClear = this.stateSource.asObservable();

  constructor() {
		// this.logs = [
		// 	{
		// 		id: '1',
		// 		text: 'Generated components',
		// 		date: new Date( 3/31/2018)
		// 	},
		// 	{
		// 		id: '2',
		// 		text: 'Added Bootstrap',
		// 		date: new Date( 4/1/2018)
		// 	},
		// 	{
		// 		id: '3',
		// 		text: 'Added logs component',
		// 		date: new Date( 4/1/2018)
		// 	}
		// ];
		this.logs = [];
	 }
	 getLogs(): Observable<Log[]> {
		 // Checks if localStorage is empty
		 if(localStorage.getItem('logs') === null) {
		 // Assigns an empty array to this.logs
			 this.logs = [];
		 } else {
			 // Parses the localStorage logs items and assigns it to this.logs
			 this.logs = JSON.parse(localStorage.getItem('logs'));
		 }
		 // Sort the logs by date
		 return of(this.logs.sort((a, b) => {
			 return b.date = a.date;
		 }));
	 }
	 setFormLog(log: Log) {
		 this.logSource.next(log);
	 }
	 addLog(log: Log) {
		 this.logs.unshift(log);

		 // Add to local storage
		 localStorage.setItem('logs', JSON.stringify(this.logs));
	 }
	 updateLog(log: Log) {
		 this.logs.forEach((cur, index) => {
			 if(log.id === cur.id) {
				 this.logs.splice(index, 1)
			 }
		 });
		 this.logs.unshift(log);

		 // Update local storage
		 localStorage.setItem('logs', JSON.stringify(this.logs));
	 }
	 deleteLog(log: Log) {
		 this.logs.forEach((cur, index) => {
			 if(log.id === cur.id) {
				 this.logs.splice(index, 1)
			 }
		 });
		 // Delete from local storage
		 localStorage.setItem('logs', JSON.stringify(this.logs));
	 }
	 clearState() {
		 this.stateSource.next(true);
	 }
}
