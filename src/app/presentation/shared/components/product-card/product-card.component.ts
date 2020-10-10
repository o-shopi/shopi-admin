import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CATEGORIES } from '../../enums';
import { CardMode, Product } from '../../interfaces';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit, OnChanges {
  images: FileList;
  formGroup: FormGroup;
  productCategories = [...CATEGORIES];

  @Input()
  mode: CardMode = 'add';

  @Input()
  clearFormDetect: true;

  @Input()
  product: Product | null = null;

  @Output()
  formSubmitted = new EventEmitter<FormGroup>();

  constructor() {}

  ngOnInit() {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.clearFormDetect &&
      !changes.clearFormDetect.firstChange &&
      changes.clearFormDetect.currentValue
    ) {
      this.resetForm();
    }
  }

  addImages(evt: any): void {
    if (evt.currentTarget.files.length) {
      this.images = evt.currentTarget.files;
    }
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.formSubmitted.emit(this.formGroup);
    }
  }

  private initializeForm(): void {
    if (this.product) {
      this.formGroup = new FormGroup({
        descricao: new FormControl(this.product.descricao, Validators.required),
        id: new FormControl(this.product.id, Validators.required),
        sku: new FormControl(this.product.sku, Validators.required),
        categoria: new FormControl(this.product.categoria, Validators.required),
        valor: new FormControl(this.product.valor, Validators.required),
      });
      return;
    }

    this.formGroup = new FormGroup({
      descricao: new FormControl(null, Validators.required),
      id: new FormControl(null, Validators.required),
      sku: new FormControl(null, Validators.required),
      categoria: new FormControl(null, Validators.required),
      valor: new FormControl(null, Validators.required),
    });
  }

  private resetForm(): void {
    this.formGroup.reset();
    this.formGroup.markAsUntouched();
  }
}
