import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CatalogComponent,
    NewsletterComponent,
    TestimonialsComponent,
    ContactformComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CatalogComponent,
    NewsletterComponent,
    TestimonialsComponent,
    ContactformComponent
  ]  // Asegúrate de exportar el componente
})
export class SharedModule {}
