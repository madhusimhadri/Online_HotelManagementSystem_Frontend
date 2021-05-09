import { Component, OnInit } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { LocalStoreService } from '../services/local-store/local-store.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn =  false;
  public owner = false;
  public manager = false;
  public receptionist = false;
  public guest = false;

  constructor(private loginService: LoginService, private router:Router, private localStore: LocalStoreService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.loggedIn();
    let role = this.localStore.getItem(ResolveEnd).toUpperCase();
    if(role.localeCompare("OWNER")== 0)
    {
      this.owner=true;
    }

    else if(role.localeCompare("MANAGER")==0){
      this.manager=true;
    }

    else if(role.localeCompare("RECEPTIONIST")==0){
      this.receptionist=true;
    }

  }

  logOutUser()
  {
    this.loginService.logOut();
    this.ngOnInit();
    this.router.navigate([''])
  }

}
