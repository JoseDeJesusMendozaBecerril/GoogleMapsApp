import { NgModule } from '@angular/core'; //Para decir que este es un modulo personalizado
import { CommonModule } from '@angular/common'; //Usar directivas

//Este lo creamos con ng g module material --flat
// Despues de crear este archivo al crear nuevos componentes debemos especificar a que modulo importar ya que hay 2 el app y el material
// ng g c components/mapa --module=app.module --spec
//Angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule, //COLOCO LOS QUE QUIERO MANDAR AL APP . MODULE
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialModule { }
