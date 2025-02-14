import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BaseModule } from './base/base.module';
import { PagesComponent } from './pages.component';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';
import { MenuComponent } from './menu/menu.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { ReadQrComponent } from './read-qr/read-qr.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    PagesComponent,
    MenuComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    MyReservationsComponent,
    ReadQrComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BaseModule,
    LoginModule,
    RouterModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ZXingScannerModule,
  ],
})
export class PagesModule {}
