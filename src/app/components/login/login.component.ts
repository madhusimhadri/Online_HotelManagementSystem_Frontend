import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStoreService } from 'src/app/services/local-store/local-store.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginDisabled = false;
	public badCredentials = false;
	public allowProgress = false;
	logInUserData = {
		username: ``,
		password: ``
	};
	constructor(private authService: LoginService,
    private _router: Router, 
    private localStore: LocalStoreService) {}

	setSessionDetails(data) {
		this.localStore.setItem('loggedIn', data.status);
		this.localStore.setItem('token', data.jwt);
    this.localStore.setItem('employee',data.employee);
		console.log(data.employee);
	}
	authenticateUser(data) {
		this.allowProgress = true;
		this.loginDisabled = true;
		console.log(this.logInUserData);
		this.authService.login(this.logInUserData).subscribe(
			(result) => {
				console.log(result);
				if (result.status) {
					this.allowProgress = false;
					this.loginDisabled = false;
					this.setSessionDetails(result);
					this._router.navigate([ '/dashboard/home' ]);
				} else {
					this.allowProgress = false;
					this.loginDisabled = false;
					this.badCredentials = true;
				}
			},
			(error) => console.log(error)
		);
	}

	ngOnInit(): void {
		if (this.localStore.getItem('token') != null) {
			this._router.navigate([ '/dashboard' ]);
		}
		console.log(this.localStore.getItem('token'));
	}

}
