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
	 getLogs(): Observable<Log[]> {
		 return of(this.logs);
	 }
	 setFormLog(log: Log) {
		 this.logSource.next(log);
	 }
	 addLog(log: Log) {
		 this.logs.unshift(log);
	 }
	 updateLog(log: Log) {
		 this.logs.forEach((cur, index) => {
			 if(log.id === cur.id) {
				 this.logs.splice(index, 1)
			 }
		 });
		 this.logs.unshift(log);
	 }
	 deleteLog(log: Log) {
		 this.logs.forEach((cur, index) => {
			 if(log.id === cur.id) {
				 this.logs.splice(index, 1)
			 }
		 });
	 }
}
