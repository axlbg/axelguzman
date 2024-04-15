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
    this.clickNuevaFederacion();
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
    this.imagen =
      'https://private-user-images.githubusercontent.com/26819418/278821320-a098b82b-570a-4b4d-8db4-dc318a21f1ce.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMyMTEyNzksIm5iZiI6MTcxMzIxMDk3OSwicGF0aCI6Ii8yNjgxOTQxOC8yNzg4MjEzMjAtYTA5OGI4MmItNTcwYS00YjRkLThkYjQtZGMzMThhMjFmMWNlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDE1VDE5NTYxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgxOTU4YTA5MWM5MWU4ZmEyZjkxNzUxMjQ5Y2IzZjc1YmEyYWYzYmY4NzYwYTNkNjkzNjFhZmMxMmJiMTNjYTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.C8ck47VkqpEK_u5ctDIjZG93bysJoe5Fget4lVubXH0';
  }

  clickAdudas() {
    this.title = 'Adudas tienda deportiva';
    this.technologies = 'Angular, HTML, CSS, TypeSript';
    this.github = '/axlbg/adudas';
    this.github_href = 'https://github.com/axlbg/adudas';
    this.visit_href = '';
    this.description =
      'Tienda deportiva con carrito de compras y más de 50 productos en catálogo, filtrar búsqueda por categorías o colección';
    this.imagen = '/assets/imgs/adudas.jpg';
  }
}
