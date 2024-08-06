import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


export interface Item {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-lightbox-gallery',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './lightbox-gallery.component.html',
  styleUrl: './lightbox-gallery.component.scss'
})

export class LightboxGalleryComponent {
  
  @Input() galleryImages: Item[] = [];
  @Input() showCount = false;

  previewImage = false;
  showMask = false;
  currentLightboxImage: Item = this.galleryImages[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor() {
  }

  ngOnInit(): void{
    this.totalImageCount = this.galleryImages.length;
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryImages[index];
  }
}
