import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Slide {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-gallery-swiper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-swiper.component.html',
  styleUrl: './gallery-swiper.component.scss'
})

export class GallerySwiperComponent {
  
  @Input() images: Slide[] = [];

  selectedIndex = 0;

  showPrev(i: number) {
    if (this.selectedIndex > 0) {
      this.selectedIndex = i - 1;
    }
  }

  showNext(i: number) {
    if (this.selectedIndex < this.images?.length - 1) {
      this.selectedIndex = i + 1;
    }
  }
}
