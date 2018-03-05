import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public title: String;
  public user: User;
  public estatus: String;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Registro';
    this.user = new User('', '', '', '','', 'ROLE_USER','');
  }

  ngOnInit() {
    console.log('regsitrer cargado');
  }

  onSubmit(){
    this.estatus = 'error';
    console.log('onSubmit');
    this._userService.register(this.user).subscribe(
      response => {
        console.log('subscribe');
        if(response.user._id){
          this.user = response.user;
          this.estatus = 'success';
        }
        this.user = new User('', '', '', '','', 'ROLE_USER','');
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
