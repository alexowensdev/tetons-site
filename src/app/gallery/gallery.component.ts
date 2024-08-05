import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GallerySwiperComponent } from '../gallery-swiper/gallery-swiper.component';



@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GallerySwiperComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GalleryComponent {
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
