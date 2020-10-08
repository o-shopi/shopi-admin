import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/presentation/controllers/produto/produto.service';
import { CATEGORIES } from '../../../shared/enums/products';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  images: FileList;
  formGroup: FormGroup;
  productCategories = [...CATEGORIES];
  isShowForm = true;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      descricao: new FormControl(null, Validators.required),
      id: new FormControl(null, Validators.required),
      sku: new FormControl(null, Validators.required),
      categoria: new FormControl(null, Validators.required),
      valor: new FormControl(null, Validators.required),
    });
  }

  addImages(evt: any): void {
    if (evt.currentTarget.files.length) {
      this.images = evt.currentTarget.files;
    }
  }

  onSubmit(): void {
    console.log(this.formGroup.controls);
    if (this.formGroup.valid) {
      const payload = {
        descricao: this.formGroup.controls.descricao.value,
        id: this.formGroup.controls.id.value,
        sku: this.formGroup.controls.sku.value,
        categoria: this.formGroup.controls.categoria.value,
        valor: this.formGroup.controls.valor.value,
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
            this.formGroup.reset();
            this.formGroup.markAsUntouched();
          });
        },
        (rej) => {}
      );
    }
  }
}
