import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { fadeIn } from '../animation';

declare var jQuery:any;
declare var $:any;


@Component({
	selector: 'tienda',
	templateUrl: './tienda.component.html',
	styleUrls: ['./tienda.component.css'],
  animations: [ fadeIn,
		trigger('marcar', [
				state('inactive', style({
					border: '5px solid #ccc'
				})),
				state('active', style({
					border: '5px solid yellow',
					background: 'red',
					borderRadius: '50px',
					transform: 'scale(1.2)'
				})),
				transition('inactive => active', animate ('1s linear')),
				transition('active => inactive', animate ('1s linear'))
		])
	]
})

export class TiendaComponent implements OnInit {
	public titulo;
	public nombreDelParque : string;
	public miParque;
	public status;


	public mostrarNombre(){
		console.log(this.nombreDelParque);
	}

	constructor(){
		this.titulo = 'Esta es la tienda';
		this.status = 'inactive';
	}

	public verDatosParque(event){
		console.log(event);
		this.miParque = event;
	}

	ngOnInit(){
		$('#textJq').hide();
		$('#buttonJq').click(function(){
			console.log("asdas");
			$('#textJq').slideToggle();
		});

		$('#caja').dotdotdot();
	}

	cambiarEstatus(status){
		if (status == 'active'){
			this.status='inactive'
		} else {
			this.status='active'
		}

	}


}
