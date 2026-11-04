import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { toBase64 } from '../../funciones/toBase64';

@Component({
  selector: 'app-input-img',
  imports: [MatButtonModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent {

  @Input({ required: true })
  titulo!: string;

  @Input()
  urlImagenActual?: string; //variable que almacena la url de la imagen actual

  @Output()
  archivoSeleccionado = new EventEmitter<File>();

  imagenBase64?: string; //variable que almacena la imagen en base64

  cambio(event: Event) { //evento que se dispara cuando el usuario selecciona un archivo
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file: File = input.files[0];
      toBase64(file).then((valor: string) => this.imagenBase64 = valor)
        .catch(error => console.error(error));

      this.archivoSeleccionado.emit(file); //emite el archivo seleccionado al padre
      this.urlImagenActual = undefined; //limpia la url de la imagen actual
    }
  }

}
