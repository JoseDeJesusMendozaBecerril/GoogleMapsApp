import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  
  lat = 51.678418;
  lng = 7.809007;
  
  marcadores:Marcador[] = [];


  constructor(private snackBar: MatSnackBar , public dialog: MatDialog) {
    
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }


  }

  ngOnInit(): void {
  }


  agregarMarcador( evento ) {
   console.log(evento)
  
    const coords: { lat:number , lng:number } = evento.coords;


    const nuevoMarcador = new Marcador(coords.lat , coords.lng);
    this.marcadores.push(nuevoMarcador);
    
    this.guardarStorage();
    this.snackBar.open('Marcador Agregado', 'Cerrar',{duration:3000});
  }
  
  borrarMarcador(i: number){
    this.marcadores.splice(i,1);
    this.guardarStorage(); //guardar sin el que se borro
    this.snackBar.open('Marcador Borrado', 'Cerrar',{duration:3000});
  }

  editarMarcador(marcador:Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc:marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      if(!result){
        return;
      }
      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.guardarStorage();
      this.snackBar.open('Marcador Actualizado', 'Cerrar',{duration:3000});

    });

  }

  guardarStorage(){
    localStorage.setItem('marcadores' , JSON.stringify(this.marcadores));
  }

  

}
