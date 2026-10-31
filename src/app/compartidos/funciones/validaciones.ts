import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function primeraLetraMayuscula() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>{
        const valor = <string>control.value;

        if(!valor) return null;
        if(valor.length === 0) return null;

        const primeraLetra = valor[0];

        //A !== A
        if(primeraLetra !== primeraLetra.toLocaleUpperCase()){
            return {
                primeraLetraMayuscula: {
                    mensaje: 'La primera letra debe ser mayuscula'
                }
            }
        }

        return null;

    }
}