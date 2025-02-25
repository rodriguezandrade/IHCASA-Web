import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/home/home.component';
import { AboutComponent } from './website/about/about.component';
import { ProductsComponent } from './website/products/products.component';
import { ContactComponent } from './website/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
