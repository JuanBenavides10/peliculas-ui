import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { GeneroCreacionDTO } from '../generos';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';
import { GenerosService } from '../generos.service';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { MostrarErroresComponent } from '../../compartidos/componentes/mostrar-errores/mostrar-errores.component';

@Component({
  selector: 'app-crear-generos',
  imports: [FormularioGeneroComponent, MostrarErroresComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {

  //inyeccion de dependencias
  private router = inject(Router);
  private generosService = inject(GenerosService);
  errores: string[] = [];

  guardarCambios(genero: GeneroCreacionDTO) {

    this.generosService.crear(genero).subscribe({
      next: () => {
        this.router.navigate(['/generos']);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    });

  }
}
