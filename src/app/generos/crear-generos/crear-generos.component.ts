import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';

@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule,ReactiveFormsModule, MatInputModule],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {

  //inyeccion de dependencias
  private router = inject(Router); 
  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['',{validators: [Validators.required,primeraLetraMayuscula()]}]

  })

  obtenerErrorCampoNombre(): string{
    //tenemos accesos a los campos, no a los valores
    let nombre = this.form.controls.nombre; 
    if(nombre.hasError('required')){
      return "El campo nombre es requerido"
    }
    if(nombre.hasError('primeraLetraMayuscula')){
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return "";
  }

  guardarCambios(){
    // ..guardar cambios
    //this.router.navigate(['/generos']); //redirigimos a generos despues de crear
  
    console.log(this.form.value);
  }
}
