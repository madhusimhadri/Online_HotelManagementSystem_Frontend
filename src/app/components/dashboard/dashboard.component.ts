import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HttpHeaders } from '@angular/common/http';
import { LocalStoreService } from 'src/app/services/local-store/local-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userRole = 'not yet fetched';
	public user;

  
  constructor(
    private _router: Router,
		private _route: ActivatedRoute,
    private userSession: LocalStoreService,
    private _auth: LoginService ) { }

  ngOnInit(): void {
    if (this._auth.loggedIn) {
			this.user = this.userSession.getItem('employee');
			console.log(this.user);
			this.userRole = this.user.role;
		}
  }

 loggedIn = false;
 logOut() {
   console.log('Logout called');

   this._auth.logOut();
   this.loggedIn = false;
   this._router.navigateByUrl('/login');
 }

}
