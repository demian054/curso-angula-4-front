import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user.service';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  public title:string;
  public identity;
  public url: string;

  emailContacto: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService:UserService
  ){
    this.title = 'NG-ZOO';
    this.url = GLOBAL.url;

  }

  ngOnInit(){
    /*this.emailContacto = localStorage.getItem("emailContacto");
    console.log(this.emailContacto);*/
  }
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
    /*this.emailContacto = localStorage.getItem("emailContacto");
    //console.log("DoCheck");*/
  }

  borrarEmail(){
    localStorage.removeItem("emailContacto");
    localStorage.clear();
    this.emailContacto = null;

  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }
}
