import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AboutComponent } from './website/about/about.component';
import { ProductsComponent } from './website/products/products.component';
import { ContactComponent } from './website/contact/contact.component';
import { RouterLink, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './website/home.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    RouterLink,
    SharedModule,
    HomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
