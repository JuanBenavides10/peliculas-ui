import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export const appConfig: ApplicationConfig = {
  //agregamos como proveedor withComponentInputBinding() , para poder leer el id de la url configurada en app.routes.ts , al editar
  //provide -> Los mat-form-field crecen dinámicamente al mostrar errores o hints.
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding()),
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,useValue: {subscriptSizing : 'dynamic'}}
  ]
};
