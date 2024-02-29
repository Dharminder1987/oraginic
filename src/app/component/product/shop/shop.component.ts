import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  shopProduct: any[] = [
    {
      image: 'assets/images/juice1.jpg',
      title: 'Early Riser',
      Category1: 'Juice',
      price: '25.00',
    },
    {
      image: 'assets/images/juice2.png',
      title: 'Leafy Produce',
      Category1: 'Juice',
      price: '15.00',
    },
    {
      image: 'assets/images/groceries1.jpg',
      title: 'Diabetic Cookies',
      Category1: 'Groceries',
      price: '25.00',
    },
    {
      image: 'assets/images/juice3.png',
      title: 'Ginger Greens',
      Category1: 'Juice',
      price: '25.00',
    },
    {
      image: 'assets/images/groceries2.jpg',
      title: 'Cashew Butter',
      Category1: 'Groceries',
      price: '55.00',
    },
    {
      image: 'assets/images/groceries3.jpg',
      title: 'Assorted Coffee',
      Category1: 'Groceries',
      price: '35.00',
    },
    {
      image: 'assets/images/juice5.png',
      title: 'Sweet Greens',
      Category1: 'Juice',
      price: '25.00',
    },
    {
      image: 'assets/images/groceries6.jpg',
      title: 'Handpicked Red Chillies',
      Category1: 'Groceries',
      price: '19.00',
    },
    {
      image: 'assets/images/groceries4.jpg',
      title: 'Fresh Organic Honey',
      Category1: 'Groceries',
      price: '34.00',
    },
    {
      image: 'assets/images/juice8.jpg',
      title: 'Celery Juice',
      Category1: 'Juice',
      price: '15.00',
    },
    {
      image: 'assets/images/groceries7.jpg',
      title: 'Pulses From Organic Farm',
      Category1: 'Groceries',
      price: '15.00',
    },
    {
      image: 'assets/images/groceries8.jpg',
      title: 'Natural Extracted Edible Oil',
      Category1: 'Groceries',
      price: '45.00',
    },
  ]

}
