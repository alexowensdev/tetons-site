import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from "./hero/hero.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { GallerySwiperComponent } from './gallery-swiper/gallery-swiper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent, 
    HeroComponent, 
    GalleryComponent, 
    GallerySwiperComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'homes';
    images = [
      {
        imgSrc: "/gallery-images/ai-geo-mountain-01.png",
        imgAlt: "AI generated geometric mountain."
      },
      {
        imgSrc: "/gallery-images/ai-line-art-tetons-01.png",
        imgAlt: "AI generated line art of the grand tetons mountain range."
      },    
      {
        imgSrc: "/gallery-images/photo-aa-planthouse.JPG",
        imgAlt: "Photo of AA Planthouse, a plant shop I founded."
      },
      {
      imgSrc: "/gallery-images/photo-deer.JPG",
      imgAlt: "Photo of a buck deer among pine trees, in Island Park, Idaho."
      }
    ]
  }
  