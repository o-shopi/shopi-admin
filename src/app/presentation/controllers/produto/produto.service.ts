import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { format } from 'date-fns';
import { environment } from 'src/environments/environment';
import { Product } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  insertProduct({ descricao, id, sku, categoria, valor }: Product) {
    const idLojista = this.getIdLojista();
    const body = {
      descricao,
      dataCadastro: format(new Date(), 'dd/MM/yyyy'),
      lojistaId: idLojista,
      id,
      sku,
      categoria,
      valor,
    };
    return this.http.post(environment.produtos.inserir, body);
  }

  getAllProducts() {
    return this.http.get(environment.produtos.listarTodos);
  }

  editProduct(product: Product, oldId: number) {
    const params = new HttpParams().append('id', String(oldId));
    const body = { ...product };

    return this.http.put(environment.produtos.editar, body, { params });
  }

  deleteProduct(id: number) {
    const params = new HttpParams().append('id', String(id));
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http.delete(environment.produtos.excluir, { params, headers });
  }

  private getIdLojista(): number {
    const id = sessionStorage.getItem('idLojista');
    if (id) {
      return Number(id);
    }
    return 1;
  }
}
