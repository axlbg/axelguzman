import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent {
  title = '';
  technologies = '';
  github = '';
  github_href = '';
  visit_href = '';
  description = '';
  imagen = '';
  ngOnInit() {
    this.clickAdudas();
  }

  clickNuevaFederacion() {
    this.title = 'Cabañas Nueva Federación';
    this.technologies = 'HTML, CSS, JS';
    this.github = '/axlbg/complejo-nuevafederacion';
    this.github_href = 'https://github.com/axlbg/complejo-nuevafederacion/';
    this.visit_href = 'https://axlbg.github.io/complejo-nuevafederacion/';
    this.description =
      'Sencilla página creada para el complejo de Cabañas Nueva Federación. Contiene galería de imágenes y algo más.';
    this.imagen = '/assets/imgs/nuevafed.jpg';
  }

  clickSalaDeJuegos() {
    this.title = 'Sala de Juegos';
    this.technologies = 'Angular, HTML, CSS, TypeSript';
    this.github = '/axlbg/Sala-de-juegos';
    this.github_href = 'https://github.com/axlbg/Sala-de-juegos';
    this.visit_href = 'https://sala-de-juego.web.app/';
    this.description =
      'Una página web con distintos juegos en js. Ahorcado, Mayor o menor, Preguntados y Ta Te Ti. Contiene sistema de registro y log-in, chat en vivo, estadísticas y guardado por cuentas.';
    this.imagen = '/assets/imgs/saladejuegos.png';
  }

  clickAdudas() {
    this.title = 'Adudas tienda deportiva';
    this.technologies = 'Angular, HTML, CSS, TypeSript';
    this.github = '/axlbg/adudas';
    this.github_href = 'https://github.com/axlbg/adudas';
    this.visit_href = 'https://adudas-4ab4b.firebaseapp.com/';
    this.description =
      'Tienda deportiva con carrito de compras y más de 50 productos en catálogo JSON, responsive, filtros de búsqueda y más';
    this.imagen = '/assets/imgs/adudas.jpg';
  }
}
