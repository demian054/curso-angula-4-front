import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  public title: string;
  public animals: Animal[];
  public status: string;
  public url: string;

  constructor(private _animalService: AnimalService) {
    this.title = "Animales";
    this.url = GLOBAL.url;
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

}
