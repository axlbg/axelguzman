import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { AboutComponent } from './components/about/about.component';
import { CirclesComponent } from './components/circles/circles.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TituloComponent,
    AboutComponent,
    CirclesComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
