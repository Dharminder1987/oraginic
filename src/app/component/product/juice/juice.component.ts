import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-juice',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './juice.component.html',
  styleUrl: './juice.component.scss'
})
export class JuiceComponent {
  juiceMenu: any[] = [
    {
      image: 'assets/images/juice1.jpg',
      title: 'Early Riser',
      para: 'Cucumber, apples, cayenne, Himalayan pink salt, and lemon.',
      price:'25.00',
    },
    {
      image: 'assets/images/juice2.png',
      title:'Leafy Produce',
      para: 'Celery, kale, spinach, cucumber, parsley, and lemon. 60cal',
      price:'15.00',
    },
    {
      image: 'assets/images/juice3.png',
      title:'Ginger Greens',
      para: 'Ginger, apple, kale, spinach, cucumber, parsley, and lemon.',
      price:'25.00',
    },
    {
      image: 'assets/images/juice4.png',
      title:'Beachy Greens',
      para: 'Pineapple, apple, cucumbers, kale, spinach, parsley, mint.',
      price:'18.00',
    },
    {
      image: 'assets/images/juice5.png',
      title:'Sunny G',
      para: 'Carrot, apple, pineapple, lemon, ginger, and mint. 180cal ',
      price:'35.00',
    },
    {
      image: 'assets/images/juice6.png',
      title:'Sweet Greens',
      para: 'Apples, kale, cucumbers, parsley, spinach, and lemon.',
    },
    {
      image: 'assets/images/juice7.png',
      title:'Sweet Beet',
      para: 'Beets, carrots, apples, ginger, and lemon. 160cal ',
      price:'27.00',
    },
    {
      image: 'assets/images/juice8.jpg',
      title:'Celery Juice',
      para: 'Just celery Beets, carrots, apples, ginger, and lemon. 160cal .',
      price:'15.00',
    },
    {
      image: 'assets/images/juice6.png',
      title:'Sweet Greens',
      para: 'Apples, kale, cucumbers, parsley, spinach, and lemon. ',
      price:'22.00',
    },

  ]

}
