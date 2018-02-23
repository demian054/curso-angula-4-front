import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = "Panel lista de Administracion";
  numbers = new Array(10);

  constructor() { }

  ngOnInit() {
  }

}
