import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  title = "Panel de edicion Administracion"
  constructor() { }

  ngOnInit() {
  }

}