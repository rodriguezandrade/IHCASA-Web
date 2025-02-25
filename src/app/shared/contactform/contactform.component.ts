import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {

  email1: string = 'info@ihcasa.com';
  email2: string = 'jearsoft@gmail.com';

  phone: string = '+504 3254-7485';

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  formSubmited () {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Gracias ${this.contactForm.get('name')?.value}, sus datos fueron enviados con éxito`,
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3500,
    });
    this.contactForm.reset();
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

  onSubmit() {
    if (this.contactForm.valid) {
      /* TODO: Make the endpoint suscription */
      /* console.log('Form Submitted!', this.contactForm.value); */
      this.formSubmited();
    } else {
      console.log('Form not valid');
      this.formFailed();
    }
  }

}
