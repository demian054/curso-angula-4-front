import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { Animal } from '../../../models/animal';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[
   AnimalService
  ]
})
export class ListComponent implements OnInit {
  public title : string;
  public animals:Animal[];
  public status : string;
  public token: string;
  public busqueda : string;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _animalService: AnimalService,
      private _userService: UserService
    ) {
      this.title = 'listado de animales';
      this.token = _userService.getToken();
    }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(){
    this._animalService.getAnimals().subscribe(
      response => {

        if(!response.animals){
          this.status = 'error';
        } else {
          this.status = 'success';
          this.animals = response.animals;
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

  deleteAnimal(id){
    this._animalService.deleteAnimal(this.token, id).subscribe(
      response => {
        console.log(response);
        if(!response.animal){
          console.log('error');
          this.status = 'error';
        } else {
          this.status = 'success';
          this.getAnimals();
        }
      },
      error => {
        var errorMessage = <any>error;
        if(errorMessage != null){
          console.log('error'+<any>error);
          this.status = 'error';
        }
      }
    );
  }


}
