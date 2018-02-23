import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
	selector: 'parques',
	templateUrl: './parques.component.html',
	styleUrls: ['./parques.component.css'],
  animations: [fadeIn]
})

export class ParquesComponent implements OnChanges, OnInit, OnDestroy {
	@Input() public nombre: string;
	@Input("metros_caudrados") public metros: number;
	public vegetacion: string;
	public abierto: boolean;

	@Output() pasameLosDatos = new EventEmitter();


	constructor(){
		this.nombre = 'PArque Natural para Caballos';
		this.metros = 350;
		this.vegetacion = 'Alta';
		this.abierto = true;
	}

	public emitirEvento(){
		this.pasameLosDatos.emit({
			'nombre' : this.nombre,
			'metros' : this.metros,
			'vegetacion' : this.vegetacion,
			'abierto' : this.abierto
		});
	}

	ngOnInit(){
		console.log("OnInit lanzado")
	}

	ngOnChanges(changes: SimpleChanges){
		console.log(changes);
	}

	ngOnDestroy(){
		console.log("OnDestroy");
	}

}
