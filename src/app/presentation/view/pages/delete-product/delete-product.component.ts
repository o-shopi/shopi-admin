import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProdutoService } from 'src/app/presentation/controllers/produto/produto.service';
import { Product } from 'src/app/presentation/shared/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'id',
    'sku',
    'descricao',
    'categoria',
    'valor',
    'dataCadastro',
  ];
  dataSource: MatTableDataSource<Product>;
  subscriptions = new Subscription();
  showTable: boolean;

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

  deleteProduct(product: Product): void {
    const { id } = product;
    this.showTable = false;
    Swal.fire({
      title: 'Atenção!',
      text:
        'Tem certeza que deseja excluir este produto? Essa ação não poderá ser desfeita!',
      showDenyButton: true,
      confirmButtonText: `Sim`,
      denyButtonText: `Cancelar`,
      customClass: {
        confirmButton: 'modal-button',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtoService.deleteProduct(id).subscribe(
          (res) => {
            Swal.fire('Produto excluído!', '', 'success').then(() => {
              this.getDataSource();
              this.showTable = true;
            });
          },
          (rej) => {
            if (rej && rej.error === 'Could not delete reservation') {
              Swal.fire('Algo inesperado aconteceu!', '', 'error').then(() => {
                this.showTable = true;
              });
              return;
            }
            Swal.fire('Produto excluído!', '', 'success').then(() => {
              this.getDataSource();
              this.showTable = true;
            });
          }
        );
      } else if (result.isDenied) {
        this.showTable = true;
      }
    });
  }

  private getDataSource(): void {
    this.subscriptions.add(
      this.produtoService.getAllProducts().subscribe((res) => {
        if (res) {
          const products = res as Product[];
          this.dataSource = new MatTableDataSource<Product>(products);
          this.dataSource.paginator = this.paginator;
        }
      })
    );
  }
}
