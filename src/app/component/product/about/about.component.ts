import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutData: any[] = [
    {
      image1: 'assets/images/story.jpg',
      image2: 'assets/images/about_img.jpg',
      title1: '/ OUR STORY',
      title2: '/ OUR LEADERSHIP',
      title3: 'CORTLAND FINNEGAN PRESIDENT',
      para1:'Whether you’re rocking a clean shave or maintaining that perfectly sculpted stubble, the Philips OneBlade Replacement Blade is your secret weapon for achieving sharp and precise results every time. With its cutting-edge technology and superior performance, this replacement blade guarantees a shave like no other.',
      para2: 'Founded by Washington Heights Natives, GWB Juice Bar is the hottest place in Washington Heights to get a great mix of food and drinks that tastes great and makes you feel great! ',

    }
  ]

}
