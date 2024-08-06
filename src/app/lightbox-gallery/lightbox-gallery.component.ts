import { Component } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';

@Component({
  selector: 'app-lightbox-gallery',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './lightbox-gallery.component.html',
  styleUrl: './lightbox-gallery.component.scss'
})
export class LightboxGalleryComponent {

}
