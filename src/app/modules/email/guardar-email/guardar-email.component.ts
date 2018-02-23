import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guardar-email',
  templateUrl: './guardar-email.component.html',
  styleUrls: ['./guardar-email.component.css']
})
export class GuardarEmailComponent implements OnInit {

  constructor() { }

  titulo: string = 'Guardar Email';
  emailContacto: string;

  guardarEmail(){
    localStorage.setItem("emailContacto", this.emailContacto);
  }

  ngOnInit() {
  }


}
