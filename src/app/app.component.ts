import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ihcasa-website';

  ctaWhatsapp () {
    window.open('https://wa.me/50432547485?text=Hola%20Ihcasa,%20quiero%20más%20información', '_blank');
  }
}
