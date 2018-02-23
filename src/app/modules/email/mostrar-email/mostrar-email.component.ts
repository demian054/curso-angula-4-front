import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  templateUrl: './mostrar-email.component.html',
  styleUrls: ['./mostrar-email.component.css']
})
export class MostrarEmailComponent implements OnInit {

  constructor() { }
  titulo: string = 'Mostrar Email';
  emailContacto: string;

  ngOnInit(){
    this.emailContacto = localStorage.getItem("emailContacto");
    console.log(this.emailContacto);
  }
  ngDoCheck(){
    this.emailContacto = localStorage.getItem("emailContacto");
    //console.log("DoCheck");
  }

  borrarEmail(){
    localStorage.removeItem("emailContacto");
    localStorage.clear();
    this.emailContacto = null;

  }

}
