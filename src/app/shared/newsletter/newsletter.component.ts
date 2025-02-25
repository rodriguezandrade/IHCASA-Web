import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {

  formSubmited () {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Gracias ${this.newsletterForm.get('email')?.value}, te has suscrito con éxito`,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3500,
        });
        this.newsletterForm.reset();
      }

      formFailed () {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops... Algo salió mal",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3500,
        });
      }

    constructor(private fb: FormBuilder) {
      this.newsletterForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]]
      });
    }

    newsletterForm: FormGroup;


    submitNewsletter() {
      if (this.newsletterForm.valid) {
        /* TODO: Make the endpoint suscription */
        console.log('Usuario suscrito', this.newsletterForm.value);
        this.formSubmited();
      } else {
        console.log('Form not valid');
        this.formFailed();
      }
    }

}
