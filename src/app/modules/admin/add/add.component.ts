import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title = "Panel de agregar Administracion"
  constructor() { }

  ngOnInit() {
  }

}
