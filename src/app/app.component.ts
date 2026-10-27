import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { MenuComponent } from './compartidos/componentes/menu/menu.component';

@Component({
  selector: 'app-root', //Nombre del componente
  imports: [ListadoPeliculasComponent, MenuComponent], //Importaciones de otros componentes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{ //clase principal del componente, implementa la interfaz OnInit para poder usar el método ngOnInit
  
ngOnInit(): void { //Método que se ejecuta al iniciar el componente
    setTimeout(() => {
      this.peliculasEnCines = [{
            titulo: 'Inside Out 2',
            fechaLanzamiento: new Date(),
            precio: 1400.99,
            poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
          },
          {
            titulo: 'Moana 2',
            fechaLanzamiento: new Date('2016-05-03'),
            precio: 300.99,
            poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
          }];

      //this.peliculasEnCines = [];

      this.peliculasProximosEstrenos = [{
            titulo: 'Bad Boys: Ride or Die',
            fechaLanzamiento: new Date('2016-05-03'),
            precio: 300.99,
            poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
          },
          {
            titulo: 'Deadpool & Wolverine',
            fechaLanzamiento: new Date('2016-05-03'),
            precio: 300.99,
            poster: 'https://th.bing.com/th/id/OIP.D0uLsnSLQ6UlWCsoKTAa_gHaJm?w=203&h=263&c=7&r=0&o=7&pid=1.7&rm=3'
          },
          {
            titulo: 'Oppenheimer',
            fechaLanzamiento: new Date('2016-05-03'),
            precio: 300.99,
            poster: 'https://th.bing.com/th/id/OIP.gFHH-phMVZQYNvfu1O36MAHaK-?w=203&h=301&c=7&r=0&o=7&pid=1.7&rm=3'
          },
          {
            titulo: 'The Flash',
            fechaLanzamiento: new Date('2016-05-03'),
            precio: 300.99,
            poster: 'https://th.bing.com/th/id/OIP.MaNXIRFpA1zK232AFPoWHgHaK-?w=203&h=301&c=7&r=0&o=7&pid=1.7&rm=3'
          }];
    }, 500); //medio segundo
  }

  peliculasEnCines!: any[];
  peliculasProximosEstrenos!: any[];
 
  procesarVoto(voto: number){
  }

}
