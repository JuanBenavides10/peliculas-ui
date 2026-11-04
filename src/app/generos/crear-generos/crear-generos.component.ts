import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { GeneroCreacionDTO } from '../generos';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';

@Component({
  selector: 'app-crear-generos',
  imports: [FormularioGeneroComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {

  //inyeccion de dependencias
  private router = inject(Router); 
 

  guardarCambios(genero: GeneroCreacionDTO){
    // ..guardar cambios
    //this.router.navigate(['/generos']); //redirigimos a generos despues de crear
  
    console.log('Creando el genero',genero);
  }
}
