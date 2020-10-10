import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProdutoService } from 'src/app/presentation/controllers/produto/produto.service';
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

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {}

  onSubmit(form: FormGroup): void {
    const payload = {
      descricao: form.controls.descricao.value,
      id: form.controls.id.value,
      sku: form.controls.sku.value,
      categoria: form.controls.categoria.value,
      valor: form.controls.valor.value,
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
}
