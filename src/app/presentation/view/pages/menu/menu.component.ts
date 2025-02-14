import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  addProducts(): void {
    this.router.navigate(['adicionar-produto']);
  }

  editProducts(): void {
    this.router.navigate(['editar-produto']);
  }

  deleteProducts(): void {
    this.router.navigate(['deletar-produto']);
  }

  myReservations(): void {
    this.router.navigate(['meus-pedidos']);
  }

  readQR(): void {
    this.router.navigate(['ler-codigo']);
  }
}
