import { Component, OnInit } from '@angular/core';
import { MenuComponent } from './compartidos/componentes/menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', //Nombre del componente
  imports: [MenuComponent, RouterOutlet], //Importaciones de otros componentes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{ //clase principal del componente, implementa la interfaz OnInit para poder usar el método ngOnInit
  

 
}
