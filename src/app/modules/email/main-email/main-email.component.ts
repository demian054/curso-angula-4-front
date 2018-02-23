import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  templateUrl: './main-email.component.html',
  styleUrls: ['./main-email.component.css']
})
export class MainEmailComponent implements OnInit {
  titulo: string = 'Modulo Email';
  constructor() { }

  ngOnInit() {
    console.log("componente email main cargado")
  }

}
