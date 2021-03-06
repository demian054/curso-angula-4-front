import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeIn]
})
export class ContactComponent implements OnInit {

  emailContacto: string;


  constructor() { }

  ngOnInit() {
  }

  guardarEmail(){
    localStorage.setItem("emailContacto", this.emailContacto);
  }

}
