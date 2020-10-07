import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { format } from 'date-fns';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  insertProduct({ descricao, id, sku, categoria, valor }) {
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

  private getIdLojista(): number {
    const id = sessionStorage.getItem('idLojista');
    if (id) {
      return Number(id);
    }
    return 1;
  }
}
