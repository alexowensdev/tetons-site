import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from "./hero/hero.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { GallerySwiperComponent } from './gallery-swiper/gallery-swiper.component';
import { LightboxGalleryComponent } from './lightbox-gallery/lightbox-gallery.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent, 
    HeroComponent, 
    GalleryComponent, 
    GallerySwiperComponent,
    LightboxGalleryComponent,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'homes';
  }
  