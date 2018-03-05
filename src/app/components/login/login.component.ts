import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: String;
  public user: User;
  public identity: User;
  public token: string;
  public estatus: string;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Login';
    this.user = new User('', '', '', '','', 'ROLE_USER','');
  }
  ngOnInit() {
    console.log('Login cargado');
    console.log(this._userService.getIdentity());
    console.log(this._userService.getToken());
  }

  onSubmit(){
    console.log(this.user);
    this._userService.singUp(this.user).subscribe(
      response => {
        //console.log('subscribe');
        this.identity = response.user;
        if(!this.identity || !this.identity._id){
          this.estatus = 'error';
          alert('usuario no logueado');
        } else {
          this.identity.password = '';
          localStorage.setItem('identity', JSON.stringify(this.identity));
          this._userService.singUp(this.user, 'true').subscribe(
            response => {
              //console.log('subscribe');
              this.token = response.token;
              if(this.token.length <= 0){
                this.estatus = 'error';
                alert('token no creado');
              } else {
                console.log(this.token);
                this.estatus = 'success';
                localStorage.setItem('token', this.token);
              }
              //this.estatus = 'success';
              //this.user = new User('', '', '', '','', 'ROLE_USER','');
            },
            error => {
              var errorMessage = <any>error;
              if(errorMessage != null){
                var body = JSON.parse(error._body);
                this.estatus = 'error';
              }
            }
          );
        }
        //this.estatus = 'success';
        //this.user = new User('', '', '', '','', 'ROLE_USER','');
      },
      error => {
        this.estatus = 'error';
        console.log(<any>error);
      }
    );
  }



}
