import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ProdutoService } from 'src/app/presentation/controllers/produto/produto.service';

export interface Product {
  id: number;
  sku: string;
  lojistaId: number;
  descricao: string;
  categoria: string;
  valor: number;
  dataCadastro: string;
}

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.produtoService.getAllProducts().subscribe((res) => {
      if (res) {
        const products = res as Product[];
        this.dataSource = new MatTableDataSource<Product>(products);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  selectProduct(product): void {
    this.selectedProduct = product;
  }
}
