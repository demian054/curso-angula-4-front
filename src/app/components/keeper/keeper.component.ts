import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'keepers',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css'],
  animations: [fadeIn]
})
export class KeeperComponent implements OnInit {
  public title : string;
  public keepers: User[];
  public status: string;
  public url: string;



  constructor(private _userService : UserService) {
    this.title = "cuidadoresss";
    this.url = GLOBAL.url;
  }

  ngOnInit() {
      console.log("keeper. component cargado");
      this.getKeepers();
  }

  getKeepers(){
    this._userService.getKeepers().subscribe(
        response => {
          console.log(response);
            if(!response.users){
            this.status = 'error';
          } else {
            this.status = 'success';
            this.keepers = response.users;
          }
        },
        error => {
          var errorMessage = <any>error;
          if(errorMessage != null){
            this.status = 'error';
          }
        }
      );
    }

}
