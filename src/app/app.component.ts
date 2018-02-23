import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'NGZOO';
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
