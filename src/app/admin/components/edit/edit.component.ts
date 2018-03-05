import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { Animal } from '../../../models/animal';

import { fadeLateral } from '../../animation';

@Component({
  selector: 'admin-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['../add/add.component.css'],
  providers:[
    UserService, AnimalService, UploadService
  ],
  animations:[fadeLateral]
})
export class EditComponent implements OnInit {
  public title;
  public animal: Animal;
  public identity;
  public token;
  public url: string;
  public status;
  public isEdit;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
    this.isEdit = true;
    this.title = 'Editar';
    //this.animal = this.getAnimal();
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('edit component animal');
    this.getAnimal();
  }


  getAnimal(){
      this._route.params.forEach((params: Params) => {
        let id = params['id'];
        this._animalService.getAnimal(id).subscribe(
          response => {
            console.log(response.animal);
            if(!response.animal){
              this._router.navigate(['/home']);
            } else {
              this.animal = response.animal;
            }
          },
          error => {
              console.log(<any>error);
              this._router.navigate(['/home']);
          }
        );
      })
    }

  onSubmit(){
    //console.log(this.animal);
    var id = this.animal._id;
    this._animalService.editAnimal(this.token, id, this.animal).subscribe(
      response => {
        if(!response.animal){
            this.status = 'error';
        } else {
            this.status = 'success';
            this.animal = response.animal;
            if(!this.filesToUpload){
              this._router.navigate(['/animal', this.animal._id]);
            } else {
              this._uploadService.makeFileRequest(
                this.url+'update-image-animal/'+this.animal._id, [],
                 this.filesToUpload,
                 this.token,
                 'image')
                 .then((result: any) => {
                   this.animal.image = result.animal.image;
                   //console.log(this.animal);
                   this._router.navigate(['/admin-panel/listado']);
                 });
            }

            this._router.navigate(['/admin-panel/listado']);
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

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);

  }




}
