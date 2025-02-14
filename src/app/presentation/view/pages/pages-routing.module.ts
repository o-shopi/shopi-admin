import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { PagesComponent } from './pages.component';
import { ReadQrComponent } from './read-qr/read-qr.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'adicionar-produto', component: AddProductComponent },
      { path: 'editar-produto', component: EditProductComponent },
      { path: 'deletar-produto', component: DeleteProductComponent },
      { path: 'meus-pedidos', component: MyReservationsComponent },
      { path: 'ler-codigo', component: ReadQrComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
