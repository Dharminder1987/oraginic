import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: any[] = [
    {
      image: 'assets/images/product1.jpg',
      name: 'Assorted Coffee',
      price: 10.99
    },
    {
      image: 'assets/images/product2.jpg',
      name: 'Hand Sanitizer',
      price: 20.49
    },
    {
      image: 'assets/images/product3.jpg',
      name: 'Handpicked Red Chillies',
      price: 15.75
    },
    {
      image: 'assets/images/product4.jpg',
      name: 'Organic Face Scrub',
      price: 15.75
    }
  ];

  bannerData: { subtitle: string, title: string, desc: string } = {
    subtitle: 'Best Quality Products',
      title: 'Join The Organic Movement!',
      desc: 'Best expert product reviews guide, tech news and expert product articles and customer reviews & consumer-oriented research to help you find the best products for your needs',
  };
}
