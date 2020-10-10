import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { BackButtonComponent } from './components/back-button/back-button.component';

export const customCurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL,
};

@NgModule({
  declarations: [LoadingComponent, ProductCardComponent, BackButtonComponent],
  exports: [LoadingComponent, ProductCardComponent, BackButtonComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
})
export class SharedModule {}
