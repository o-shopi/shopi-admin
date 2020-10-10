import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { ProdutoService } from 'src/app/presentation/controllers/produto/produto.service';
import { Product } from 'src/app/presentation/shared/interfaces';
import { AuthService } from 'src/app/presentation/shared/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  formGroup: FormGroup;
  isShowForm = true;
  clearForm: boolean;

  constructor(
    private produtoService: ProdutoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(form: FormGroup): void {
    const lojistaId = Number(this.authService.getUserInfos());

    const payload: Product = {
      descricao: form.controls.descricao.value,
      id: form.controls.id.value,
      sku: form.controls.sku.value,
      categoria: form.controls.categoria.value,
      valor: form.controls.valor.value,
      lojistaId,
      dataCadastro: format(new Date(), 'dd/MM/yyyy'),
    };

    this.produtoService.insertProduct(payload).subscribe(
      (res) => {
        this.isShowForm = false;
        Swal.fire(
          'Sucesso!',
          'Produto cadastrado com sucesso!',
          'success'
        ).then((result) => {
          this.isShowForm = true;
          this.clearForm = true;
        });
      },
      (rej) => {}
    );
  }

  returnToMenu(): void {
    this.router.navigate(['menu']);
  }
}
