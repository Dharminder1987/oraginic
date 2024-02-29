import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-groceries',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './groceries.component.html',
  styleUrl: './groceries.component.scss'
})
export class GroceriesComponent {
  groceries: any[] = [
    {
      id: 1,
      image: 'assets/images/groceries1.jpg',
      title: 'Diabetic Cookies',
      price: 25.00,
    },
    {
      image: 'assets/images/groceries2.jpg',
      title: 'Cashew Butter',
      price:'55.00',
    },
    {
      image: 'assets/images/groceries3.jpg',
      title: 'Assorted Coffee',
      price:'35.00',
    },
    {
      image: 'assets/images/groceries4.jpg',
      title: 'Fresh Organic Honey',
      price:'34.00',
    },
    {
      image: 'assets/images/groceries5.jpg',
      title: 'Hand Sanitizer',
      price:'15.00',
    },
    {
      image: 'assets/images/groceries6.jpg',
      title: 'Handpicked Red Chillies',
      price:'19.00',
    },
    {
      image: 'assets/images/groceries7.jpg',
      title: 'Pulses From Organic Farm',
      price:'15.00',
    },
    {
      image: 'assets/images/groceries8.jpg',
      title: 'Natural Extracted Edible Oil',
      price:'45.00',
    },
    {
      image: 'assets/images/groceries9.jpg',
      title: 'Organic Face Scrub',
      price:'35.00',
    },
  ]

}
