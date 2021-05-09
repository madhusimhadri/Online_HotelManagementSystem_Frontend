import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  private ls = window.localStorage;

	constructor(private _router: Router) {}

	public setItem(key, value) {
		value = JSON.stringify(value);
		this.ls.setItem(key, value);
		return true;
	}
	public getItem(key) {
		let value = this.ls.getItem(key);

		try {
			console.log('inside get item');
			value = JSON.parse(value);
			console.log(value);

			return value;
		} catch (e) {
			console.log(e);

			return null;
		}
	}
	logedIn() {
		return !!this.getItem('token');
	}

	logoutAndEraseData() {
		if (this.ls.getItem('token') != null) {
			this.ls.removeItem('token');
			this.ls.removeItem('employee');
			this.ls.removeItem('status');
			
		}
	}
}
