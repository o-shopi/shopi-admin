import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProdutoService } from 'src/app/presentation/controllers/produto/produto.service';
import { Reservation } from 'src/app/presentation/shared/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.scss'],
})
export class MyReservationsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'id',
    'identificador',
    'descricao',
    'quantidade',
    'valor',
  ];
  dataSource: MatTableDataSource<Reservation>;
  subscriptions = new Subscription();
  showTable: boolean;
  reservations: Reservation[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private router: Router, private produtoService: ProdutoService) {}

  ngOnInit() {
    this.getDataSource();
    this.showTable = true;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  returnToMenu(): void {
    this.router.navigate(['menu']);
  }

  reserveProduct(row) {
    this.showTable = false;
    Swal.fire({
      title: 'Atenção!',
      text:
        'Tem certeza que deseja concluir essa reserva? Essa ação não poderá ser desfeita!',
      showDenyButton: true,
      confirmButtonText: `Sim`,
      denyButtonText: `Cancelar`,
      customClass: {
        confirmButton: 'modal-button',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Reserva concluída!', '', 'success').then(() => {
          this.reservations.splice(row.id, 1);
          this.dataSource = new MatTableDataSource<Reservation>(this.reservations);
          this.dataSource.paginator = this.paginator;
          this.showTable = true;
        });
      }
    });
  }

  private getDataSource(): void {
    this.reservations = [
      {
        id: 1,
        descricao: 'Tênis azul',
        usuarioId: '133AVF',
        quantidade: 1,
        valor: 200,
      },
      {
        id: 2,
        descricao: 'Tênis adibas',
        usuarioId: 'H65IJ',
        quantidade: 1,
        valor: 260,
      },
      {
        id: 3,
        descricao: 'Camisa branca',
        usuarioId: '139EEE',
        quantidade: 3,
        valor: 300,
      },
      {
        id: 4,
        descricao: 'Camisa vermelha',
        usuarioId: 'OPL837',
        quantidade: 1,
        valor: 199,
      },
    ];
    this.dataSource = new MatTableDataSource<Reservation>(this.reservations);
    this.dataSource.paginator = this.paginator;
  }
}
