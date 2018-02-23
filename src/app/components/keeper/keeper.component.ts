import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'keepers',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css'],
  animations: [fadeIn]
})
export class KeeperComponent implements OnInit {
  title = "cuidadores";
  constructor() { }

  ngOnInit() {
      console.log("keeper. component cargado");
  }

}
