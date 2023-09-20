import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaEstudiantesComponent } from './tabla-estudiantes/tabla-estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaEstudiantesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
