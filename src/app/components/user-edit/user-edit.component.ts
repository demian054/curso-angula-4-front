import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public title: String;
  public user: User;
  public identity;
  public token;
  public estatus: string;
  public url;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _uploadService: UploadService
  ) {
    this.title = 'Actualizar Usuario';
    this.identity = this._userService.getIdentity();
    console.log(this.identity);
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log("cargado edit user");
  }

  onSubmit(){
    console.log(this.user);
    this._userService.updateUser(this.user).subscribe(
      response => {
        if(!response.user){
          this.estatus = 'error';
        } else {
          this.estatus = 'success';
          console.log("success");
          localStorage.setItem('identity', JSON.stringify(this.user));

          this._uploadService.makeFileRequest(
            this.url+'update-image-user/'+this.user._id, [],
             this.filesToUpload,
             this.token,
             'image')
             .then((result: any) => {
               this.user = result.user;
               localStorage.setItem('identity', JSON.stringify(this.user));
               console.log(this.user);
             });

        }
      },
      error => {
        var errorMessage = <any>error;

        if (errorMessage != null){

          console.log("error");
          console.log(errorMessage);
          this.estatus = 'error';
        }

      }

    )
  }

public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);

  }

}
