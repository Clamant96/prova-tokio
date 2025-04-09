import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from '../components/home/home.component'

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaAddressesComponent } from 'src/components/lista-addresses/lista-addresses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaAddressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
