import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface Product {
  id: number;
  sku: string;
  descricao: string;
  categoria: string;
  valor: number;
  dataCadastro: string;
}

const ELEMENT_DATA: Product[] = [
  {
    id: 1,
    descricao: 'Hydrogen',
    valor: 1.0079,
    categoria: 'H',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 2,
    descricao: 'Helium',
    valor: 4.0026,
    categoria: 'He',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 3,
    descricao: 'Lithium',
    valor: 6.941,
    categoria: 'Li',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 4,
    descricao: 'Beryllium',
    valor: 9.0122,
    categoria: 'Be',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 5,
    descricao: 'Boron',
    valor: 10.811,
    categoria: 'B',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 6,
    descricao: 'Carbon',
    valor: 12.0107,
    categoria: 'C',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 7,
    descricao: 'Nitrogen',
    valor: 14.0067,
    categoria: 'N',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 8,
    descricao: 'Oxygen',
    valor: 15.9994,
    categoria: 'O',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 9,
    descricao: 'Fluorine',
    valor: 18.9984,
    categoria: 'F',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 10,
    descricao: 'Neon',
    valor: 20.1797,
    categoria: 'Ne',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 11,
    descricao: 'Sodium',
    valor: 22.9897,
    categoria: 'Na',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 12,
    descricao: 'Magnesium',
    valor: 24.305,
    categoria: 'Mg',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 13,
    descricao: 'Aluminum',
    valor: 26.9815,
    categoria: 'Al',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 14,
    descricao: 'Silicon',
    valor: 28.0855,
    categoria: 'Si',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 15,
    descricao: 'Phosphorus',
    valor: 30.9738,
    categoria: 'P',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 16,
    descricao: 'Sulfur',
    valor: 32.065,
    categoria: 'S',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 17,
    descricao: 'Chlorine',
    valor: 35.453,
    categoria: 'Cl',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 18,
    descricao: 'Argon',
    valor: 39.948,
    categoria: 'Ar',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 19,
    descricao: 'Potassium',
    valor: 39.0983,
    categoria: 'K',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
  {
    id: 20,
    descricao: 'Calcium',
    valor: 40.078,
    categoria: 'Ca',
    sku: 'lalalalal',
    dataCadastro: '02/10/2020',
  },
];

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
  dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);
  selectedProduct: Product;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  selectProduct(product): void {
    this.selectedProduct = product;
  }
}
