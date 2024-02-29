import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  handleSubmit(event: Event) {
    // Prevent default form submission if invalid
    if (this.contactForm.invalid) {
      event.preventDefault();
      // Mark all fields as touched for immediate validation feedback
      Object.values(this.contactForm.controls).forEach(control => control.markAsTouched());
      return;
    }

    // Handle form submission here, e.g., submit data to your server
    console.log('Form submitted:', this.contactForm.value);
    // Reset the form after successful submission (optional)
    this.contactForm.reset();
  }

  get field() {
    return this.contactForm.controls;
  }

}
