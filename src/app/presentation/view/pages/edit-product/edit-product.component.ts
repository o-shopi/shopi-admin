import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { format } from 'date-fns';
import { Subscription } from 'rxjs';
import { ProdutoService } from 'src/app/presentation/controllers/produto/produto.service';
import { Product } from 'src/app/presentation/shared/interfaces';
import { AuthService } from 'src/app/presentation/shared/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'id',
    'sku',
    'descricao',
    'categoria',
    'valor',
    'dataCadastro',
  ];
  dataSource: MatTableDataSource<Product>;
  selectedProduct: Product;
  showTable: boolean;
  showProductCard: boolean;
  subscriptions = new Subscription();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private produtoService: ProdutoService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getDataSource();
    this.showTable = true;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
    this.showTable = false;
    this.showProductCard = true;
  }

  productEdited(form?: FormGroup) {
    this.showProductCard = false;
    const lojistaId = Number(this.authService.getUserInfos());

    const newProduct: Product = {
      lojistaId,
      id: form.controls.id.value,
      sku: form.controls.sku.value,
      valor: form.controls.valor.value,
      categoria: form.controls.categoria.value,
      descricao: form.controls.descricao.value,
      dataCadastro: format(new Date(), 'dd/MM/yyyy'),
    };

    this.subscriptions.add(
      this.produtoService
        .editProduct(newProduct, this.selectedProduct.id)
        .subscribe(
          (res) => {
            Swal.fire(
              'Sucesso!',
              'Produto editado com sucesso!',
              'success'
            ).then((result) => {
              this.getDataSource();
              this.selectedProduct = null;
              this.showTable = true;
            });
          },
          (rej) => {}
        )
    );
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
