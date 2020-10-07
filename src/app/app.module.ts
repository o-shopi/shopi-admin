import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { SweetAlertService } from 'ngx-sweetalert2';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DataModule,
    BrowserAnimationsModule,
  ],
  providers: [SweetAlertService],
  bootstrap: [AppComponent],
})
export class AppModule {}
